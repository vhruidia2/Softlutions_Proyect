import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cardText: string | any;
  @Input() buttonText: string | any;
  @Input() imgCard: string | any;

  

  constructor() { }

  ngOnInit(): void {
  }

}
