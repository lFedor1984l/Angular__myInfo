import { mySkills } from './../app.component';
import { Component } from '@angular/core';


@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.css']
})
export class MySkillsComponent {
  skills = new mySkills;

  mySkills = {
    education: ['Ростовский базовый медицинский колледж', 'Пензенский медицинский институт'],
    course: ['Эндодонтия в современной стоматологии', 'Художественная реставрация моляров и премоляров', 'Классический массаж', 'Мануальный и миофасцелярный массаж'],
    skils: ['Лечение зубов', 'Удаление зубов', 'Все виды массажа'],
    hobby: ['Игра на гитаре', 'Моделизм', 'Астрономия'],
  }

}
