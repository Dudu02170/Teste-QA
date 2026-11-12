# Teste-QA · Automação de teste web com Selenium

Script de automação de um cenário de teste de ponta a ponta em um site de busca de hotéis, escrito em **Python** com **Selenium WebDriver**.

## Cenário de teste

| Passo | Ação | Resultado esperado |
| --- | --- | --- |
| 1 | Acessar `trivago.com.br` | Página inicial carregada |
| 2 | Digitar "Manaus" no campo de busca | Sugestões de destino exibidas |
| 3 | Clicar em **Pesquisar** | Lista de hotéis de Manaus |
| 4 | Ordenar por **Avaliação e sugestões** | Lista reordenada |
| 5 | Verificar o nome do primeiro hotel | Nome exibido |
| 6 | Verificar a avaliação do primeiro hotel | Avaliação exibida |
| 7 | Verificar o valor do primeiro hotel | Valor exibido |

No final, o script imprime no terminal os dados coletados:

```
==== Dados Recolhidos de manaus ====
Nome do hotel: ...
Valor: ...
Primeira avaliação: ...
```

## Como rodar

Pré-requisitos: Python 3.9+ e Google Chrome instalados. O Selenium 4 baixa o ChromeDriver sozinho.

```bash
git clone https://github.com/Dudu02170/Teste-QA.git
cd Teste-QA
pip install -r requirements.txt
python main.py
```

## Estrutura do código

| Função | O que faz |
| --- | --- |
| `busca(local)` | Abre o site, digita o destino e dispara a pesquisa |
| `order()` | Ordena os resultados por avaliação |
| `captura_dados()` | Coleta nome, valor e primeira avaliação do primeiro hotel |

## Observações

- Os elementos são localizados por **XPath**. Como o site muda com frequência, alguns seletores podem precisar de ajuste.
- Próximos passos planejados: trocar os `time.sleep` por esperas explícitas (`WebDriverWait`), adicionar asserções com **pytest** e organizar as telas em **Page Objects**.

## Tecnologias

Python · Selenium WebDriver · ChromeDriver

## Autor

**Eduardo Consul** · [LinkedIn](https://www.linkedin.com/in/eduardo-consul/) · [GitHub](https://github.com/Dudu02170)
