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

  it('fill in the form', async () => {
    page.navigateTo();
    page.getField('name').sendKeys('John Doe');
    page.getField('email').sendKeys('john@craftacademy.se');
    page.getField('company').sendKeys('Craft Academy');
    page.getField('role').sendKeys('Tester');
    page.getField('twitter').sendKeys('@tester');
    page.getField('location').sendKeys('Gothenburg');
    page.getField('notes').sendKeys('Some tester guy');
    debugger;
    page.getSubmitButton().click();
      // .then((res) => {
      //   debugger;
      //   const card = page.lC();
      //   // console.log('HELLO HELLO', card);
      //   expect(page.elementByTag(card, 'h1')).toEqual('John Doe');
      // })
    let count = await page.lC();
    expect(count).toBe(3);

  });
  
});
