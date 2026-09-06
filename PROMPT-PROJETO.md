# PROMPT-MESTRE — ATUALIZAÇÃO DO REPERTÓRIO PERMANENTE DA MISSA

Quero que você atualize meu projeto existente “Cifras da Missa”, mantendo como base visual e funcional a última versão aprovada, destinada ao uso na Capela Militar da Base Naval de Natal, em iPad na posição vertical.

## REGRAS GERAIS
- O projeto é permanente e acumulativo.
- Não refaça o site do zero sem necessidade.
- Preserve layout, navegação, funcionamento, repertório já cadastrado e mudança de tom.

## INPUTS QUE POSSO FORNECER
1. Novas músicas:
   - TXT
   - Google Docs
   - DOCX
   - PDF
   - texto colado na conversa
   - imagens, quando necessário

2. Folheto litúrgico (opcional):
   - usar para data, domingo litúrgico e tema da missa

3. Logos e imagens institucionais (opcional):
   - usar de forma discreta no layout

## COMPORTAMENTO ESPERADO AO RECEBER NOVAS MÚSICAS
- Ler todos os arquivos enviados.
- Identificar cada música.
- Identificar categoria litúrgica.
- Identificar tom original.
- Preservar letra e cifras.
- Preservar o alinhamento das cifras exatamente acima da letra.
- Verificar se a música já existe.
- Se já existir, não duplicar automaticamente.
- Se for uma música nova na mesma categoria, acrescentar como mais uma opção.
- Nunca apagar música existente sem ordem expressa.

## EXEMPLO DE LÓGICA
Se já existir:
Entrada:
- Reunidos Aqui

e eu enviar:
Entrada:
- Outra música

o resultado deve ser:
Entrada:
- Reunidos Aqui
- Outra música

## CATEGORIAS MÍNIMAS
- Entrada
- Saudação
- Ato Penitencial
- Glória
- Salmo
- Aclamação ao Evangelho
- Ofertório
- Santo
- Pai Nosso
- Cordeiro de Deus
- Consagração / Adoração
- Comunhão
- Ação de Graças
- Canto Final
- Nossa Senhora
- Espírito Santo
- Aniversário / Bênção
- Extras

## MÓDULOS
### Módulo Violão
- Mostrar letra + cifra
- Permitir:
  - subir meio tom
  - descer meio tom
  - escolher o tom
  - restaurar tom original

### Módulo Canto
- Mostrar somente a letra
- Priorizar leitura limpa

### Navegação
- Em qualquer módulo, deve existir botão para voltar à página inicial e escolher novamente o módulo.
- Manter:
  - Anterior
  - Repertório
  - Próxima

## CIFRAS
- Não transformar músicas em imagem.
- Usar HTML real.
- Preservar a posição das cifras acima da letra.
- Suportar inversões e extensões.
- Não deixar as cifras desalinhadas.

## LAYOUT PARA IPAD
- Cada música deve caber em uma única tela vertical sempre que possível.
- Tentar primeiro uma coluna.
- Se necessário, usar duas colunas sem sobreposição.
- Prioridade absoluta: leitura da música.

## VISUAL
- Manter a versão limpa aprovada.
- Não criar painéis explicativos grandes.
- Manter identidade naval/litúrgica de forma discreta.
- Não usar marcas d'água ou fundos que atrapalhem a leitura.
- Usar a logo principal da equipe de música como ícone do site quando eu a fornecer.
- Incluir favicon, apple-touch-icon e imagem de compartilhamento.

## ENTREGA FINAL
Ao final, entregar:
1. ZIP completo do repositório atualizado
2. resumo curto das mudanças
3. informar quantas músicas novas foram adicionadas
4. informar em quais categorias
5. informar se houve duplicidade evitada
6. instruções simples para substituir os arquivos no GitHub

## FRASE-CHAVE
Adicionar músicas ao repertório permanente, e não substituir músicas da mesma categoria.
