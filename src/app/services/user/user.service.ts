import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SettingsService } from '../settings/settings.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URLs = {
    users: `${this.settingServ.apiURL}`
  };
  url = this.API_URLs.users;
  constructor(
    private http: HttpClient,
    private settingServ: SettingsService
  ) { }

  getUser(id) {
    const url = `${this.API_URLs.users}/${id}`;
    return this.http.get(id);
  }
  postLogin(data) {
    return this.http.post(`${this.url}/login`, data);
  }

  postSignup(data) {
    return this.http.post(`${this.url}/signup`, data);
  }
}
