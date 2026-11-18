import { scenario, assert } from './support.js';
import { HotelsPage } from './hotels.page.js';
scenario('pesquisa Manaus retorna nome avaliacao e preco',async p=>{
 await p.open('/qa/fixtures/hotels.html');
 const page=new HotelsPage(p.driver);await page.search('Manaus');
 assert.deepEqual(await page.firstHotel(),{name:'Hotel QA Centro',rating:'8.2',price:'R$ 250,00'});
});
scenario('ordenacao por avaliacao coloca melhor nota primeiro',async p=>{
 await p.open('/qa/fixtures/hotels.html');
 const page=new HotelsPage(p.driver);await page.search('Manaus');await page.sortByRating();
 assert.deepEqual(await page.firstHotel(),{name:'Hotel QA Rio',rating:'9.4',price:'R$ 320,00'});
});
scenario('destino sem resultado nao exibe hotel',async p=>{
 await p.open('/qa/fixtures/hotels.html');
 const page=new HotelsPage(p.driver);
 assert.equal(await page.search('Cidade inexistente'),'empty');
 await p.waitText('[data-testid="no-results"]','Nenhum hotel encontrado.');
 assert.equal(await p.driver.executeScript('return document.querySelectorAll("[data-testid=hotel-card]").length'),0);
});

scenario('buscas consecutivas substituem resultados e permitem recuperar apos vazio',async p=>{
 await p.open('/qa/fixtures/hotels.html');const page=new HotelsPage(p.driver);
 assert.equal(await page.search('Manaus'),'results');
 assert.deepEqual(await page.firstHotel(),{name:'Hotel QA Centro',rating:'8.2',price:'R$ 250,00'});
 assert.equal(await page.search('Cidade inexistente'),'empty');
 assert.equal(await p.driver.executeScript('return document.querySelectorAll("[data-testid=hotel-card]").length'),0);
 assert.equal(await page.search('manaus'),'results');
 assert.equal(await p.driver.executeScript('return document.querySelectorAll("[data-testid=no-results]").length'),0);
 assert.deepEqual(await page.firstHotel(),{name:'Hotel QA Centro',rating:'8.2',price:'R$ 250,00'});
});
