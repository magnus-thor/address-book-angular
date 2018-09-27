import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
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

  lastCard() {
    browser.sleep(10000000)
    let cards = element.all(by.css('.card'));
    // console.log('SWEET SWEET', cards);
    let lastCard = cards[cards.length -1];
    return lastCard;
  }

  lC() {
    browser.sleep(100000);
    let cards = element.all(by.css('.card')).count();

    return cards;
  }

  elementByTag(card, tag) {
    return card.element(by.css(tag));
  }

  sleep(time) {
    browser.sleep(time);
  }
}
