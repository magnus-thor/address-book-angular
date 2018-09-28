import { browser, by, element } from 'protractor';
import { async } from 'rxjs/internal/scheduler/async';

export class AppPage {
  navigateTo() {
    browser.ignoreSynchronization = true;
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h2')).getText();
  }

  getField(name) {
    return element(by.name(name));
  }

  getSubmitButton() {
    return element(by.buttonText('Submit'));
  }

  // lastCard() {
  //   // browser.sleep(10000000)
  //   let cards = element.all(by.css('.card'));
  //   // console.log('Cards: ', cards);
  //   let lastCard = cards[cards.length -1];
  //   return lastCard;
  // }

  lC() {
    return element.all(by.css('.card')).count();
    // let cards = element.all(by.css('.card')).count().then((value) => {
    //   return value;
    // }, (reason) => {
    //   return reason
    // });
    // debugger;
    // return cards;
  }

  elementByTag(card, tag) {
    return card.element(by.css(tag));
  }
}
