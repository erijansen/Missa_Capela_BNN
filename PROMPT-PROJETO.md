# PROMPT-MESTRE — REPOSITÓRIO “CIFRAS DA MISSA” PARA iPAD / GITHUB PAGES

Quero que você gere ou atualize um **repositório de site estático** para GitHub Pages destinado ao repertório musical de uma missa, com foco em uso prático no **iPad em posição vertical**, apoiado em suporte durante a celebração.

## INPUTS OBRIGATÓRIOS
1. **Folheto litúrgico** (PDF, DOCX, imagem ou texto)
   - usar principalmente para identificar:
     - data;
     - celebração litúrgica;
     - subtítulo temático que aparecerá no cabeçalho do projeto.

2. **Arquivo editável das cifras**
   - pode ser Google Docs, DOCX, PDF ou outro formato utilizável;
   - esta é a **fonte principal e vinculante** para:
     - ordem do repertório;
     - títulos;
     - letras;
     - tons;
     - cifras;
     - posicionamento dos acordes.

3. **Logos / brasões / imagens institucionais** (opcionais, mas desejáveis)
   - podem incluir:
     - marca da equipe de música;
     - brasão da capela;
     - ordinariado militar;
     - serviço religioso;
     - Marinha do Brasil;
     - comando militar relacionado;
     - logos temáticas da celebração.
   - essas imagens devem ser usadas para enriquecer a página inicial, o cabeçalho, o menu lateral e pequenos painéis visuais, sem poluir a leitura.

4. **Alterações pontuais digitadas por mim**
   - quando eu mandar trocar alguma música, corrigir cifra ou mudar tom, altere somente o que eu pedir;
   - tudo o que eu não mencionar deve permanecer fiel ao arquivo principal.

---

## OBJETIVO DO PROJETO
Quero um **repositório completo**, pronto para ser publicado no GitHub Pages, contendo um site com **dois módulos**:

### 1. Módulo Violão
- exibe letra + cifra;
- mantém as cifras alinhadas exatamente acima da letra;
- permite:
  - subir meio tom;
  - descer meio tom;
  - escolher diretamente o tom;
  - restaurar o tom original.

### 2. Módulo Canto
- exibe somente a letra;
- prioriza leitura limpa;
- maximiza o tamanho da fonte.

---

## REGRA CENTRAL — CIFRA NÃO PODE SER IMAGEM
As músicas devem ser construídas em **HTML real**, e não como imagem.

Cada acorde deve ficar rigorosamente posicionado sobre a sílaba, palavra ou trecho correspondente da letra.

Use:
- fonte monoespaçada;
- preservação de espaços;
- linhas de cifra e letra na mesma malha de alinhamento;
- `white-space: pre` ou técnica equivalente;
- nenhuma quebra automática que desloque os acordes.

Se o arquivo editável trouxer espaços, tabs ou alinhamentos originais, eles devem ser preservados e convertidos para um sistema confiável de posicionamento dos acordes.

---

## LAYOUT PARA iPAD
O objetivo é permitir que o músico ou cantor abra a música e a execute **sem precisar rolar a página**.

### Regras:
1. Cada música deve caber integralmente em uma única tela.
2. Tentar primeiro uma única coluna.
3. Aumentar a fonte até o maior tamanho possível que caiba.
4. Compactar moderadamente margens e espaçamentos quando necessário.
5. Se a música for longa demais e a fonte ficar pequena, permitir **duas colunas**.
6. Em duas colunas:
   - ocupar bem a largura útil da tela;
   - manter centralização visual;
   - não encavalar ou sobrepor linhas;
   - nunca separar cifra da respectiva linha de letra;
   - preferir a divisão em limites de estrofe ou refrão.

---

## VISUAL E IDENTIDADE
O projeto deve ter estética:
- litúrgica;
- elegante;
- amistosa;
- naval / institucional, quando houver contexto militar ou da Marinha;
- agradável para leitura à distância.

### Aplicação visual sugerida:
- página inicial com um pequeno **painel institucional**;
- uso moderado de logos e brasões em cartões ou blocos;
- cabeçalho com título da missa e tema litúrgico;
- menu lateral com marca principal do projeto;
- fundo e cores inspirados em:
  - azul institucional / naval;
  - dourado;
  - creme / branco.

### Regras importantes:
- nunca prejudicar a leitura da música;
- se uma logo for escura ou branca e perder contraste com o fundo, colocá-la sobre cartão claro ou escuro adequado;
- evitar textos técnicos na interface, como “HTML real...”;
- a interface deve parecer um produto final, e não uma tela de teste.

---

## ESTRUTURA DO REPOSITÓRIO
Entregar pelo menos:
- `index.html`
- `violao.html`
- `canto.html`
- `css/styles.css`
- `js/data.js`
- `js/app.js`
- `assets/`
- `README.md`
- `PROMPT-PROJETO.md`

O projeto deve ser estático, sem dependências externas, funcionando em GitHub Pages e também offline se os arquivos forem abertos localmente.

---

## NAVEGAÇÃO
- botão **Anterior**
- botão **Repertório**
- botão **Próxima**
- menu lateral com lista das músicas
- swipe horizontal opcional
- tudo funcionando bem no Safari do iPad

---

## TRANSPOSIÇÃO
No módulo Violão:
- transpor a nota fundamental dos acordes;
- transpor o baixo de acordes invertidos (`D/F#`, `G/B`, etc.);
- preservar extensões e qualificadores:
  - `m7`
  - `7M`
  - `sus4`
  - `add9`
  - `7(4/9)`
  - `º`
  - etc.

Não confundir a barra de extensões com baixo invertido.

---

## ENTREGA FINAL
Quero receber:
1. o repositório completo em arquivos;
2. um `.zip` pronto para upload no GitHub;
3. um breve resumo do que foi melhorado no visual e na estrutura;
4. orientação simples, em linguagem amistosa, de como atualizar meu repositório online.

---

## VALIDAÇÃO ANTES DE ENTREGAR
Conferir:
- todas as músicas presentes;
- ordem correta;
- letras corretas;
- cifras corretas;
- alinhamento entre acorde e letra;
- funcionamento do módulo Violão;
- funcionamento do módulo Canto;
- mudança de tom;
- navegação;
- leitura em iPad na vertical;
- bom uso das imagens institucionais sem poluição visual.
