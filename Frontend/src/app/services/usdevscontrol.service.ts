import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Dev } from '../models/devs.model';

@Injectable({
  providedIn: 'root',
})
export class UsdevscontrolService {
  currentDev: Dev;
  validator: boolean;
  constructor(private http: HttpClient, public router: Router) {
    this.currentDev = new Dev();
    this.validator = false;
  }
  login(devs: any): Observable<any> {
    return this.http.post('http://localhost:5400/devs/singup', devs);
  }
  decodeToken(): any {
    let token = localStorage.getItem('token');
    let decoded = jwtDecode(token || 'Error en token'); // retornar el payload del token
    return decoded;
  }
  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.currentDev = new Dev();
    return;
  }
  isLoggedIn() {
    let token = localStorage.getItem('token') || false;

    if (token) {
      return true;
    }

    return false;
  }
  formulary() {
    return (this.validator = true);
  }
  closeFormulary() {
    return (this.validator = false);
  }
  formularyValidator() {
    if (this.validator === true) {
      return true;
    }
    return false;
  }

  isAdmin() {
    let token = localStorage.getItem('token') || false;

    if (token) {
      let decodedToken: any = this.decodeToken();

      if (decodedToken.isAdmin === true) {
        return true;
      }
    }

    return false;
  }
  isDev() {
    let token = localStorage.getItem('token') || false;

    if (token) {
      let decodedToken: any = this.decodeToken();

      if (decodedToken.isDev === true) {
        return true;
      }
    }

    return false;
  }
}
