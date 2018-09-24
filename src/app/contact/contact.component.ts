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
      name: 'Magnus Thor',
      email: 'magnus@craftacademy.se',
      company: 'Craft Academy',
      role: 'Coach',
      twitter: 'Magnus_thor',
      location: 'Gothenburg',
      notes: 'Junior Developer',
      image: 'https://marketplace.canva.com/MABKNNGp23I/1/thumbnail_large/canva-rocky-mountain-with-beach-MABKNNGp23I.jpg'
    };
  }


  ngOnInit() {
  }

}
