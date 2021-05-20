import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  io = io("http://localhost:55555", {
    autoConnect: true
  });


  constructor() {
  }

  getBalance(): any {
  }

}
