# Migração do exercício para JavaScript + Selenium
O arquivo main.py é um exercício de automação de um site externo, não um back-end próprio.
Esta suíte adiciona um Page Object em JavaScript, esperas explícitas e asserções, mantendo o Python original.
```sh
cd qa
npm install
npm test
```
Requer Node.js 22+ e Chrome. Cinco cenários executam em uma fixture HTML local controlada: busca de Manaus com nome/nota/preço, ordenação, ausência de resultado, buscas consecutivas e substituição assíncrona de resultados.
A URL qa/fixtures/hotels.html?delay=250 mantém os cartões anteriores por 250 ms antes de substituir o resultado e sinaliza aria-busy durante a busca. O teste usa as esperas do Page Object, sem sleep fixo no cenário, e verifica conclusão, estado vazio e recuperação. O atraso é da fixture; não simula nem mede uma integração de rede real.
**A fixture valida a nova infraestrutura de automação. Ela não comprova o funcionamento do Trivago nem executa o main.py.**
Para adaptar ao site real, forneça os seletores verificados à classe HotelsPage. Os atributos data-testid da fixture não são alegados como existentes no Trivago. Não há integração real agendada.
JUnit e evidências nas falhas em reports/. GitHub Actions executa a fixture. Nenhuma reserva é feita.
