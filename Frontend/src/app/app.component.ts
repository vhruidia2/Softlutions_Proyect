import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { DevsService } from 'src/app/services/devs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoFinal';
  constructor(public devsService: DevsService) {}
  ngOnInit(): void {
    this.getDevs()
  }
  getDevs() {
    let response = this.devsService.getDevs();
    response.subscribe((res: any) => {
      this.devsService.devs = res;
      console.log(this.devsService.devs);
    });
  }
}
