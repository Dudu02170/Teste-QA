import { By, until, Select } from 'selenium-webdriver';
export class HotelsPage {
 constructor(driver,selectors={}) {
  this.driver=driver;
  this.s={
   search:By.id('input-auto-complete'),submit:By.css('[data-testid="search-button"]'),
   empty:By.css('[data-testid="no-results"]'),
   sort:By.id('sorting-selector'),card:By.css('[data-testid="hotel-card"]'),
   name:By.css('[data-testid="hotel-name"]'),rating:By.css('[data-testid="hotel-rating"]'),
   price:By.css('[data-testid="hotel-price"]'),...selectors
  };
 }
 async visible(locator){const e=await this.driver.wait(until.elementLocated(locator),10000);await this.driver.wait(until.elementIsVisible(e),10000);return e;}
 async search(city){
  const previous=[...await this.driver.findElements(this.s.card),...await this.driver.findElements(this.s.empty)];
  const e=await this.visible(this.s.search);await e.clear();await e.sendKeys(city);
  await (await this.visible(this.s.submit)).click();
  // A previous result must be replaced before accepting the next terminal state.
  if(previous.length) await this.driver.wait(until.stalenessOf(previous[0]),10000,'Resultados anteriores não foram substituídos');
  return this.driver.wait(async()=>{
   for(const [state,locator] of [['results',this.s.card],['empty',this.s.empty]]){
    for(const element of await this.driver.findElements(locator)){
     try{if(await element.isDisplayed())return state;}
     catch(error){if(error.name!=='StaleElementReferenceError')throw error;}
    }
   }
   return false;
  },10000,'Busca não apresentou hotéis nem estado vazio');
 }
 async sortByRating(){await new Select(await this.visible(this.s.sort)).selectByVisibleText('Avaliação e sugestões');}
 async firstHotel(){const card=await this.visible(this.s.card);return {name:await card.findElement(this.s.name).getText(),rating:await card.findElement(this.s.rating).getText(),price:await card.findElement(this.s.price).getText()};}
}
