import { info } from './../app.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-info-my',
  templateUrl: './info-my.component.html',
  styleUrls: ['./info-my.component.css']
})
export class InfoMyComponent {
  myInfo = new info;
  
  info = {
    name: 'Федор',
    age: 39,
    gender: 'Мужчина',
    country: 'Россия',
    city: 'Ростов-на-дону'
  }
}


