import { By, until, Select, Key } from 'selenium-webdriver';
export class HotelsPage {
 constructor(driver,selectors={}) {
  this.driver=driver;
  this.s={
   search:By.id('input-auto-complete'),submit:By.css('[data-testid="search-button"]'),
   sort:By.id('sorting-selector'),card:By.css('[data-testid="hotel-card"]'),
   name:By.css('[data-testid="hotel-name"]'),rating:By.css('[data-testid="hotel-rating"]'),
   price:By.css('[data-testid="hotel-price"]'),...selectors
  };
 }
 async visible(locator){const e=await this.driver.wait(until.elementLocated(locator),10000);await this.driver.wait(until.elementIsVisible(e),10000);return e;}
 async search(city){const e=await this.visible(this.s.search);await e.clear();await e.sendKeys(city);await (await this.visible(this.s.submit)).click();await this.visible(this.s.card);}
 async sortByRating(){await new Select(await this.visible(this.s.sort)).selectByVisibleText('Avaliação e sugestões');}
 async firstHotel(){const card=await this.visible(this.s.card);return {name:await card.findElement(this.s.name).getText(),rating:await card.findElement(this.s.rating).getText(),price:await card.findElement(this.s.price).getText()};}
}
