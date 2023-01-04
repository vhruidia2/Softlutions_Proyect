import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel-banner',
  templateUrl: './carrousel-banner.component.html',
  styleUrls: ['./carrousel-banner.component.css']
})
export class CarrouselBannerComponent implements OnInit {
  @Input() img1: string | any;
  @Input() img2: string | any;
  @Input() img3: string | any;
  

  constructor() { }

  ngOnInit(): void {
  }

}
