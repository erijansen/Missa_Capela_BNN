
(() => {
  const DATA = window.MISSA_DATA;
  const songs = DATA.songs;
  const mode = document.body.dataset.mode || "guitar";
  let currentIndex = 0;
  let semitoneShift = 0;

  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  const songStage = $("#songStage");
  const menu = $("#songMenu");
  const keyPanel = $("#keyPanel");

  const SHARP = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
  const FLAT  = ["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"];
  const NOTE = {"C":0,"B#":0,"C#":1,"Db":1,"D":2,"D#":3,"Eb":3,"E":4,"Fb":4,"E#":5,"F":5,"F#":6,"Gb":6,"G":7,"G#":8,"Ab":8,"A":9,"A#":10,"Bb":10,"B":11,"Cb":11};
  const FLAT_KEYS = new Set(["F","Bb","Eb","Ab","Db","Gb","Cb"]);
  const SHARP_KEYS = new Set(["G","D","A","E","B","F#","C#"]);

  function esc(s=""){ return s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }
  function pcName(pc,key){ pc=(pc%12+12)%12; return FLAT_KEYS.has(key)?FLAT[pc]:SHARP[pc]; }

  function transposeChord(token, shift, targetKey){
    if(!shift) return token;
    const lead=(token.match(/^[\(\[]*/)||[""])[0], tail=(token.match(/[\)\]]*$/)||[""])[0];
    let core=token.slice(lead.length, token.length-tail.length);
    let bass=null;
    const bm=core.match(/\/([A-G](?:#|b)?)$/);
    if(bm){ bass=bm[1]; core=core.slice(0,bm.index); }
    const rm=core.match(/^([A-G](?:#|b)?)(.*)$/);
    if(!rm) return token;
    const rpc=NOTE[rm[1]]; if(rpc==null) return token;
    let out=pcName(rpc+shift,targetKey)+rm[2];
    if(bass!=null){ const bpc=NOTE[bass]; if(bpc!=null) out+="/"+pcName(bpc+shift,targetKey); }
    return lead+out+tail;
  }

  function targetKey(song){
    const base=song.baseKey||song.keyLabel||"C";
    return pcName((NOTE[base]??0)+semitoneShift, song.keyLabel||base);
  }

  function chordRow(block,song){
    const tkey=targetKey(song);
    const width=Math.max(block.width||0,(block.lyric||"").length,12);
    const spans=(block.chords||[]).map(c=>`<span class="chord-token" style="left:${c.col}ch">${esc(transposeChord(c.text,semitoneShift,tkey))}</span>`).join("");
    return `<div class="chord-row" style="width:${width}ch">${spans}</div>`;
  }

  function renderBlock(block,song){
    if(block.type==="space") return `<div class="spacer"></div>`;
    if(block.type==="lyric") return `<div class="music-pair"><div class="lyric-row">${esc(block.lyric)}</div></div>`;
    if(mode==="singer") return block.lyric?`<div class="music-pair"><div class="lyric-row">${esc(block.lyric)}</div></div>`:"";
    return `<div class="music-pair">${chordRow(block,song)}<div class="lyric-row">${esc(block.lyric||"")}</div></div>`;
  }

  function groups(blocks){
    const out=[]; let g=[];
    blocks.forEach(b=>{ if(b.type==="space"){ if(g.length) out.push(g); g=[]; } else g.push(b); });
    if(g.length) out.push(g);
    return out;
  }
  function splitBalanced(gs){
    if(gs.length<2){ const a=gs[0]||[], mid=Math.ceil(a.length/2); return [a.slice(0,mid),a.slice(mid)]; }
    const ws=gs.map(g=>g.length), total=ws.reduce((a,b)=>a+b,0); let sum=0,cut=1,best=1e9;
    for(let i=1;i<gs.length;i++){ sum+=ws[i-1]; const d=Math.abs(total/2-sum); if(d<best){best=d;cut=i;} }
    return [gs.slice(0,cut).flat(),gs.slice(cut).flat()];
  }
  function renderCols(song,cols){
    if(cols===1) return `<div class="music-column">${song.blocks.map(b=>renderBlock(b,song)).join("")}</div>`;
    const [a,b]=splitBalanced(groups(song.blocks));
    return `<div class="music-column">${a.map(x=>renderBlock(x,song)).join("")}</div><div class="music-column">${b.map(x=>renderBlock(x,song)).join("")}</div>`;
  }
  function fits(frame){ return frame.scrollHeight<=frame.clientHeight+1 && frame.scrollWidth<=frame.clientWidth+1; }

  function fitSong(song){
    const frame=$(".song-body"), content=$(".music-grid");
    const minReadable=mode==="guitar"?16.5:18, maxSize=mode==="guitar"?28:31;
    function trial(cols){
      content.className=`music-grid cols-${cols}`; content.innerHTML=renderCols(song,cols); content.style.marginTop="0";
      let lo=11,hi=maxSize,best=11;
      for(let n=0;n<18;n++){ const mid=(lo+hi)/2; content.style.fontSize=mid+"px"; if(fits(frame)){best=mid;lo=mid}else hi=mid; }
      content.style.fontSize=Math.max(11,best-.12).toFixed(2)+"px"; return best;
    }
    const one=trial(1);
    if(one<minReadable) trial(2);
    requestAnimationFrame(()=>{
      const rem=Math.max(0,frame.clientHeight-content.scrollHeight);
      content.style.marginTop=Math.min(rem/2,46)+"px";
    });
  }

  function updateKeyUI(song){
    if(mode!=="guitar"){ if(keyPanel) keyPanel.hidden=true; return; }
    keyPanel.hidden=false;
    $("#currentKey").textContent=targetKey(song);
    $("#originalKey").textContent=song.baseKey||song.keyLabel||"—";
    const sel=$("#keySelect"); if([...sel.options].some(o=>o.value===targetKey(song))) sel.value=targetKey(song);
  }

  function renderSong(i,keepShift=false){
    currentIndex=(i+songs.length)%songs.length;
    if(!keepShift) semitoneShift=0;
    const s=songs[currentIndex];
    $("#songNumber").textContent=String(s.num).padStart(2,"0");
    $("#songRole").textContent=s.role; $("#songTitle").textContent=s.title; $("#songCounter").textContent=`${currentIndex+1} / ${songs.length}`;
    updateKeyUI(s);
    songStage.innerHTML=`<div class="music-grid cols-1"></div>`;
    fitSong(s);
    $$(".song-menu-item").forEach((el,j)=>el.classList.toggle("active",j===currentIndex));
    history.replaceState(null,"",`#musica-${s.num}`);
  }

  songs.forEach((s,i)=>{
    const b=document.createElement("button"); b.className="song-menu-item";
    b.innerHTML=`<span class="song-menu-num">${String(s.num).padStart(2,"0")}</span><span><b>${esc(s.role)}</b><small>${esc(s.title)}</small></span>`;
    b.onclick=()=>{$("#menuToggle").checked=false;renderSong(i);}; menu.appendChild(b);
  });

  $("#prevSong").onclick=()=>renderSong(currentIndex-1);
  $("#nextSong").onclick=()=>renderSong(currentIndex+1);

  if(mode==="guitar"){
    $("#transposeDown").onclick=()=>{semitoneShift--;updateKeyUI(songs[currentIndex]);fitSong(songs[currentIndex]);};
    $("#transposeUp").onclick=()=>{semitoneShift++;updateKeyUI(songs[currentIndex]);fitSong(songs[currentIndex]);};
    $("#resetKey").onclick=()=>{semitoneShift=0;updateKeyUI(songs[currentIndex]);fitSong(songs[currentIndex]);};
    $("#keySelect").onchange=e=>{
      const s=songs[currentIndex], base=NOTE[s.baseKey||s.keyLabel||"C"]??0, target=NOTE[e.target.value];
      if(target==null)return; let d=target-base; while(d>6)d-=12; while(d<-6)d+=12; semitoneShift=d;
      updateKeyUI(s);fitSong(s);
    };
  }

  let sx=null,sy=null;
  document.addEventListener("touchstart",e=>{if($("#menuToggle").checked||e.touches.length!==1)return;sx=e.touches[0].clientX;sy=e.touches[0].clientY;},{passive:true});
  document.addEventListener("touchend",e=>{if(sx==null||$("#menuToggle").checked)return;const dx=e.changedTouches[0].clientX-sx,dy=e.changedTouches[0].clientY-sy;sx=sy=null;if(Math.abs(dx)>90&&Math.abs(dx)>Math.abs(dy)*1.4)renderSong(dx<0?currentIndex+1:currentIndex-1);},{passive:true});
  window.addEventListener("resize",()=>setTimeout(()=>fitSong(songs[currentIndex]),100));

  const h=location.hash.match(/musica-(\d+)/), idx=h?songs.findIndex(s=>s.num===Number(h[1])):0;
  renderSong(idx>=0?idx:0);
})();
