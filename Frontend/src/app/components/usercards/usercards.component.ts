import { Component, OnInit,Input } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/users.model';
import { NgForm } from '@angular/forms';
import { last } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usercards',
  templateUrl: './usercards.component.html',
  styleUrls: ['./usercards.component.css']
})
export class UsercardsComponent implements OnInit {
  @Input() Nombre: string | undefined;
  @Input() Apellido: string | undefined;
  @Input() queBusca: string | undefined;
  @Input() image: string | undefined;
  @Input() btnText: string | undefined;
  @Input() btnColor: string | undefined;
  @Input() cardSize: string | undefined;
  @Input() userId: string | undefined;
  @Input() range: string | undefined;


  constructor(public usersService:UsersService) { }

  ngOnInit(): void {
  }
  

}
