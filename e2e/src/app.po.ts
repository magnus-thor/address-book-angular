import { browser, by, element } from 'protractor';
import { async } from 'rxjs/internal/scheduler/async';

export class AppPage {
  navigateTo() {
    // browser.ignoreSynchronization = true;
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

  cardCount() {
    return element.all(by.css('.card')).count();
  }

  elementByTag(card, tag) {
    return card.element(by.css(tag));
  }
}
