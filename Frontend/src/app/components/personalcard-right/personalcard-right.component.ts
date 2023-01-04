import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personalcard-right',
  templateUrl: './personalcard-right.component.html',
  styleUrls: ['./personalcard-right.component.css'],
})
export class PersonalcardRightComponent implements OnInit {
  @Input() ImgPersonal: string | any;
  @Input() name: string | any;
  @Input() presentation: string | any;

  constructor() {}

  ngOnInit(): void {}
}
