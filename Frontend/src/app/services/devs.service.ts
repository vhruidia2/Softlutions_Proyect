import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dev } from '../models/devs.model';

@Injectable({
  providedIn: 'root',
})
export class DevsService {
  URL_API = 'http://localhost:5400/devs';
  devs: any;
  currentDev: Dev;

  constructor(public http: HttpClient) {
    this.currentDev = new Dev();
  }
  getDevDetail(id: string) {
    return this.http.get(`${this.URL_API}/dev-details?id=${id}`);
  }

  getDevs() {
    return this.http.get(`${this.URL_API}/get-dev`);
  }
  createDev(data: Dev) {
    return this.http.post(`${this.URL_API}/create-dev`, data);
  }
  deleteDev(id: string) {
    return this.http.delete(`${this.URL_API}/delete-devs?id=${id}`);
  }

  updateDev(id: string, data: Dev) {
    return this.http.put(`${this.URL_API}/update-dev?id=${id}`, data);
  }
}
