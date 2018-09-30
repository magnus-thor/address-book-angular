import { AppPage } from './app.po';
import { async } from 'rxjs/internal/scheduler/async';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display create contact header', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Create contact');
  });

  it('fill in the form', () => {
    page.navigateTo();
    debugger;
    let name_field = page.getField('name')
    name_field.sendKeys('John Doe');
    page.getField('email').sendKeys('john@craftacademy.se');
    page.getField('company').sendKeys('Craft Academy');
    page.getField('role').sendKeys('Tester');
    page.getField('twitter').sendKeys('@tester');
    page.getField('location').sendKeys('Gothenburg');
    page.getField('notes').sendKeys('Some tester guy');
    let button = page.getSubmitButton()
    button.click();
      // .then((res) => {
      //   debugger;
      //   const card = page.lC();
      //   // console.log('HELLO HELLO', card);
      //   expect(page.elementByTag(card, 'h1')).toEqual('John Doe');
      // })
    let count = page.lC();
    expect(count).toBe(4);

  });
  
});
