# Planilha de Controle Financeiro

Arquivos adicionados:
- spreadsheets/expenses_template.csv: template CSV com colunas: Data,Tipo,Categoria,Descrição,Valor_Total,Parcelas,Valor_Parcela,Status,Observações
- spreadsheets/generate_xlsx.py: script Python (usa openpyxl) que gera `planilha_financeiro.xlsx` com as abas `Expenses` e `Resumo Mensal` (12 meses a partir de 2025-11-01). O script adiciona a fórmula de Valor_Parcela e as fórmulas de resumo com SUMPRODUCT.

Como gerar o arquivo .xlsx localmente:
1. Tenha Python 3 instalado.
2. Instale dependências: `pip install openpyxl`
3. Rode: `python spreadsheets/generate_xlsx.py`
4. O arquivo `planilha_financeiro.xlsx` será criado na raiz do repositório.

Observações:
- O template usa a coluna Data (A) como início das parcelas.
- As fórmulas usam ponto (,) como separador decimal e vírgula (,) como separador de função — dependendo da localidade do Excel, as fórmulas podem requerer `;` em vez de `,`.
- Se preferir, posso atualizar e enviar diretamente o arquivo `.xlsx` como commit. Diga se quer isso.
