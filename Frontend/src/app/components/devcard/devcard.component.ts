import { Component, OnInit,Input } from '@angular/core';
import { DevsService } from 'src/app/services/devs.service';
import { User } from 'src/app/models/users.model';
import { NgForm } from '@angular/forms';
import { last } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-devcard',
  templateUrl: './devcard.component.html',
  styleUrls: ['./devcard.component.css']
})
export class DevcardComponent implements OnInit {
  @Input() Nombre: string | undefined;
  @Input() Apellido: string | undefined;
  @Input() devType: string | undefined;
  @Input() tecno: string | undefined;
  @Input() experience: string | undefined;
  @Input() image: string | undefined;
  @Input() btnText: string | undefined;
  @Input() btnColor: string | undefined;
  @Input() cardSize: string | undefined;
  @Input() devId: string | undefined;

  constructor(public devService:DevsService) { }

  ngOnInit(): void {
  }

}
