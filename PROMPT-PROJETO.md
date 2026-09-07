# PROMPT-MESTRE — ATUALIZAÇÃO DO REPERTÓRIO PERMANENTE DA MISSA

Quero que você atualize meu projeto existente “Cifras da Missa”, mantendo como base visual e funcional a última versão aprovada, destinada ao uso na Capela Militar da Base Naval de Natal, em iPad na posição vertical.

## REGRAS GERAIS
- O projeto é permanente e acumulativo.
- Não refaça o site do zero sem necessidade.
- Preserve layout, navegação, funcionamento e repertório já cadastrado.

## INPUTS QUE POSSO FORNECER
1. Novas músicas:
   - TXT
   - Google Docs
   - DOCX
   - PDF
   - texto colado
   - imagens, quando necessário

2. Folheto litúrgico (opcional):
   - usar para data, domingo litúrgico e tema da missa

3. Logos e imagens institucionais (opcional):
   - usar de forma discreta, elegante e funcional

## COMPORTAMENTO AO RECEBER NOVAS MÚSICAS
- Ler todos os arquivos enviados.
- Identificar música, categoria litúrgica e tom original.
- Preservar letra e cifras.
- Preservar o alinhamento das cifras exatamente acima da letra.
- Verificar se a música já existe.
- Se já existir, não duplicar automaticamente.
- Se for uma música nova na mesma categoria, acrescentar como mais uma opção.
- Nunca apagar música existente sem ordem expressa.

## LÓGICA DO REPERTÓRIO
Adicionar músicas ao repertório permanente, e não substituir músicas da mesma categoria.

## MÓDULOS
### Módulo Violão
- mostrar letra + cifra
- permitir subir tom, descer tom, escolher tom e voltar ao tom original

### Módulo Canto
- mostrar somente a letra
- priorizar leitura limpa

### Navegação
- em qualquer módulo, deve existir botão para voltar à página inicial e escolher novamente o módulo
- manter navegação por repertório, anterior e próxima

## CIFRAS
- não transformar músicas em imagem
- usar HTML real
- manter cifras perfeitamente alinhadas
- suportar inversões e extensões

## LAYOUT PARA IPAD
- cada música deve caber em uma única tela vertical sempre que possível
- tentar primeiro uma coluna
- se necessário, usar duas colunas sem sobreposição
- prioridade absoluta: leitura da música

## VISUAL
- manter a versão limpa aprovada
- não criar painéis explicativos grandes
- não usar fundos que atrapalhem a leitura
- usar a logo principal da equipe de música como:
  - favicon
  - apple-touch-icon
  - imagem de compartilhamento

### Identidade visual da página inicial
- no canto superior direito do painel principal, usar a logo:
  **3B2 - LogoCom3DN_Reduzida-Branca.png**
- na faixa de símbolos abaixo, usar o **símbolo da Marinha** em vez do logo escrito “Marinha do Brasil”
- manter os demais símbolos institucionais com discrição e bom contraste

## ENTREGA FINAL
Ao final, entregar:
1. ZIP completo do repositório atualizado
2. resumo curto das mudanças
3. README atualizado
4. PROMPT-PROJETO atualizado
5. instruções simples para substituir os arquivos no GitHub


## REGRA VISUAL ESPECÍFICA DO 3º DISTRITO NAVAL
Na página inicial:
- usar no canto superior direito a imagem `3B2 - LogoCom3DN_Reduzida-Branca.png`;
- não substituir por uma versão horizontal maior;
- manter a logo em bloco próprio, ao lado do título, sem diminuir a largura dos botões Violão e Canto;
- em telas menores, reduzir proporcionalmente a logo, sem permitir que ela desloque ou comprima o conteúdo principal.


## REGRA DE RESPONSIVIDADE PARA IPAD
A página inicial deve ser testada prioritariamente em iPad vertical.

No iPad:
- o cabeçalho principal deve usar três áreas equilibradas:
  1. logo da equipe;
  2. título + Capela + celebração;
  3. logo reduzida do 3º Distrito Naval;
- os botões **Violão** e **Canto** devem ocupar uma segunda linha inteira, lado a lado e com largura equivalente;
- nunca permitir que a logo do 3º DN comprima o título ou os botões;
- evitar palavras quebradas em várias linhas, como “Cifras / da / Missa”;
- evitar botões estreitos e altos;
- o layout deve permanecer visualmente horizontal e fluido dentro do painel, mesmo no iPad em modo vertical;
- usar breakpoints específicos para tablets, e não tratar o iPad simplesmente como desktop ou celular.
