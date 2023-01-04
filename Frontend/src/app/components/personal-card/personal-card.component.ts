import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-card',
  templateUrl: './personal-card.component.html',
  styleUrls: ['./personal-card.component.css'],
})
export class PersonalCardComponent implements OnInit {
  @Input() ImgPersonal: string | any;
  @Input() name: string | any;
  @Input() presentation: string | any;

  constructor() {}

  ngOnInit(): void {}
}
