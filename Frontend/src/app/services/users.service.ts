import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  URL_API = 'http://localhost:5400/users'
  users:any
  currentUser: User
  

  constructor( public http:HttpClient) {
    this.currentUser = new User()
   }

   getUserDetail(id:string){
    return this.http.get(`${this.URL_API}/user-details?id=${id}`)
   }

  getUsers(){
    return this.http.get(`${this.URL_API}/get-users`)
  }
  createUser(data: User) {
    return this.http.post(`${this.URL_API}/create-user`, data);
  }
    deleteUser(id:string){
      return this.http.delete(`${this.URL_API}/delete-user?id=${id}`)
    }

    updateUser(id:string, data: User){
      return this.http.put(`${this.URL_API}/update-user?id=${id}`,data)
    }
}
