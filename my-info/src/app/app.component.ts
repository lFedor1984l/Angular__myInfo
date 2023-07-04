import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'my-info';
}

export class info {
  name!: string;
  age!: number;
  gender!: string;
  country!: string;
  city!: string;
}

export class mySkills {
  education!: [];
  course!: [];
  skils!: [];
  hobby!: [];
}
