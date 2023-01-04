import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UsdevscontrolService } from '../services/usdevscontrol.service';

@Injectable({
  providedIn: 'root',
})
export class AdmindevGuard implements CanActivate {
  constructor(
    public router: Router,
    public devsService: UsdevscontrolService
  ) {}

  canActivate() {
    let token: any = localStorage.getItem('token') || '';

    if (token) {
      let { isAdmin }: any = this.devsService.decodeToken();
      console.log(isAdmin);
      console.log(this.devsService.decodeToken());
      if (isAdmin) {
        return true;
      }
    }
    alert('No tienes permisos administrativos');
    this.router.navigate(['/home']);
    return false;
  }
}
