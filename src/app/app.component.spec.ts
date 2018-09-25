import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Input } from '@angular/core';
import { ContactComponent } from './contact/contact.component';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, ContactComponent
      ],
      imports: [
        FormsModule
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should be have 3 contacts when initialized', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.contacts.length).toEqual(3);
  }));

  it('should render create contact in a h2 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Create contact');
  }));

  it('createContact should add contact to contacts', async(() => {
    const contact = {
      name: 'John Doe',
      email: 'john@craftacademy.se',
      company: 'Craft Academy',
      role: 'Tester',
      twitter: '@tester',
      location: 'Stockholm',
      notes: 'There are no notes on this guy'
    };
    
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    
    app.contact = contact;
    app.createContact();
    
    expect(app.contacts[app.contacts.length -1]).toEqual(contact);
  }));
  
});
