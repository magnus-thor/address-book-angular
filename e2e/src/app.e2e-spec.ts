import { AppPage } from './app.po';

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
    page.getField('name').sendKeys('John Doe');
    page.getField('email').sendKeys('john@craftacademy.se');
    page.getField('company').sendKeys('Craft Academy');
    page.getField('role').sendKeys('Tester');
    page.getField('twitter').sendKeys('@tester');
    page.getField('location').sendKeys('Gothenburg');
    page.getField('notes').sendKeys('Some tester guy');
    page.getSubmitButton().click();
    // .then(function() {
    //   const card = page.lastCard();
    //   // console.log('HELLO HELLO', card);
    //   expect(page.elementByTag(card, 'h1')).toEqual('John Doe');
    // })
    page.lC()

  });
  
});
