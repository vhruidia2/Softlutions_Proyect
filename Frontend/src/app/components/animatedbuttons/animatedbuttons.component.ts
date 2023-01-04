import { Component, Input,  OnInit } from '@angular/core';

@Component({
  selector: 'app-animatedbuttons',
  templateUrl: './animatedbuttons.component.html',
  styleUrls: ['./animatedbuttons.component.css']
})
export class AnimatedbuttonsComponent implements OnInit {
  @Input() ide: string | any;
  @Input() IconImg: string | any;

  constructor() { }

  ngOnInit(): void {
  }

}
