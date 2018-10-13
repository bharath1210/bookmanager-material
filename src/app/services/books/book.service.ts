import { Injectable } from '@angular/core';
import { SettingsService } from '../settings/settings.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  API_URLs = {
    users: `${this.settingServ.apiURL}/api/users`
  };
   url: any = `http://localhost:3000/bookmenu`;

  constructor(
    private settingServ: SettingsService,
    private http: HttpClient
  ) { }

  bookPost(data) {
    return this.http.post(this.url, data);
  }

  bookGet() {
    return this.http.get(this.url);
  }

  bookGetById(id) {
    return this.http.get(`${this.url}/${id}`);
  }

  bookEdit(data) {
    const id = data._id;
    return this.http.put(`${this.url}/${id}`, data);
  }

  bookDelete(id) {
    return new Promise((resolve, reject) => {
      this.http.delete(`${this.url}/${id}`)
        .subscribe(resolve, reject);
    });
  }
}

