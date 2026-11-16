# Migração do exercício para JavaScript + Selenium
O arquivo main.py é um exercício de automação de um site externo, não um back-end próprio.
Esta suíte adiciona um Page Object em JavaScript, esperas explícitas e asserções, mantendo o Python original.
```sh
cd qa
npm install
npm test
```
Requer Node.js 22+ e Chrome. Três cenários executam em uma fixture HTML local controlada: busca de Manaus com nome/nota/preço, ordenação e ausência de resultado.
**A fixture valida a nova infraestrutura de automação. Ela não comprova o funcionamento do Trivago nem executa o main.py.**
Para adaptar ao site real, forneça os seletores verificados à classe HotelsPage. Os atributos data-testid da fixture não são alegados como existentes no Trivago. Não há integração real agendada.
JUnit e evidências nas falhas em reports/. GitHub Actions executa a fixture. Nenhuma reserva é feita.
