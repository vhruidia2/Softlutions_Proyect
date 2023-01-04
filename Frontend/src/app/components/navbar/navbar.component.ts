import { Component, Input, OnInit } from '@angular/core';
import { UsuserscontrolService } from 'src/app/services/ususerscontrol.service';
import { UsdevscontrolService } from 'src/app/services/usdevscontrol.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() devId: string | undefined;
 

  constructor( public usersService:UsuserscontrolService, public router:Router, public devsService:UsdevscontrolService) { }

  ngOnInit(): void {
  }

}
