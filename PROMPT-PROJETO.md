# PROMPT-MESTRE — CIFRAS DA MISSA PARA iPAD / GITHUB PAGES

Quero que você gere ou atualize um repositório de site estático para GitHub Pages destinado ao repertório musical de uma missa, otimizado principalmente para iPad na posição vertical.

## INPUTS
1. Folheto litúrgico: usar para identificar data, celebração e tema litúrgico exibido no cabeçalho.
2. Arquivo editável das cifras (Google Docs/DOCX): fonte principal para ordem do repertório, títulos, letras, tons e posicionamento das cifras.
3. Logos/brasões: opcionais.
4. Alterações pontuais digitadas por mim: alterar somente o solicitado e manter o restante fiel ao arquivo.

## CIFRAS
Não converter músicas em imagens. Usar HTML real.
Preservar rigorosamente a posição horizontal de cada acorde em relação à sílaba/palavra da letra. Ao ler DOCX/Google Docs, preservar espaços/tabs e transformar os acordes em tokens posicionados pela coluna original.

## MÓDULO VIOLÃO
Exibir letra + cifras. Permitir subir/descer 1 semitom, escolher tom diretamente e restaurar o original.
Transpor fundamental e baixo invertido, preservando extensões como m7, 7M, sus4, 7(4/9), º etc. Não confundir a barra interna de extensões com baixo.

## MÓDULO CANTO
Exibir somente a letra, sem cifras, maximizando a fonte.

## LAYOUT
Cada música deve caber integralmente em uma única tela do iPad, sem rolagem durante a execução.
Tentar primeiro uma coluna. Maximizar fonte. Somente se ficar pequena demais, usar duas colunas.
Em duas colunas, ocupar bem a página, centralizar, nunca sobrepor, não separar cifra da respectiva letra e preferir quebras em estrofes/refrões.

## NAVEGAÇÃO
Menu Repertório + Anterior + Próxima; swipe horizontal opcional.

## IDENTIDADE
Visual litúrgico navy/dourado/creme.
No menu: “Cifras da Missa” e abaixo a celebração do folheto litúrgico.
Não mostrar textos técnicos como “Texto HTML real...”.
Se a logo escura perder contraste no fundo, colocá-la em cartão claro/creme com borda dourada.

## REPOSITÓRIO
Entregar: index.html, violao.html, canto.html, css/styles.css, js/data.js, js/app.js, assets/, README.md.

## VALIDAÇÃO
Conferir todas as músicas, ordem, títulos, letra, casamento cifra/sílaba, transposição, layout em 1 e 2 colunas, navegação e funcionamento no Safari do iPad.

## ENTREGA
Fornecer ZIP do repositório pronto para GitHub Pages e explicar como publicar/atualizar.
