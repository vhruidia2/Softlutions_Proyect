import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/users.model';
import { NgForm } from '@angular/forms';
import{last} from 'rxjs'
import { Data } from '@angular/router';
import { Dev } from 'src/app/models/devs.model';
import { DevsService } from 'src/app/services/devs.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public usersService: UsersService, public devsService:DevsService) { }

  ngOnInit(): void {
  }

 
  
  
 


  

}
