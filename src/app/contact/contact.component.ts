import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() contact: any;

  constructor() {
    this.contact = {
      name: '',
      email: '',
      company: '',
      role: '',
      twitter: '',
      location: '',
      notes: ''
    };
  }


  ngOnInit() {
  }

}
