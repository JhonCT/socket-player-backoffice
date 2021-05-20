import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) {
  }

  SUBJECT = 'socket';

  item({ headers }): any {
    return this.http.get(`/v1/${this.SUBJECT}`, {
      headers,
    });
  }

  addBalance({ body }): any {
    return this.http.post(`/v1/${this.SUBJECT}/add`, body);
  }

  substractBalance({ body }): any {
    return this.http.post(`/v1/${this.SUBJECT}/subtract`, body);
  }
}
