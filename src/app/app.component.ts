import { ChangeDetectionStrategy, Component, OnChanges, SimpleChanges } from '@angular/core';
import { SocketService } from './services/socket.service';
import { HttpHeaders } from '@angular/common/http';
import { PlayerService } from './services/player.service';
import { Observable } from 'rxjs';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'socket-client';
  playerId;
  amount;
  balance = 0;
  user$: Observable<any>;
  currentBalance$: Observable<any>;


  constructor(
    private socketService: SocketService,
    private playerService: PlayerService,
    private socket: Socket
  ) {
  }

  ngOnInit(): void {
   
  }

  add(): void {
    const body = {
      playerId: this.playerId,
      amount: this.amount
    };

    this.playerService.addBalance({ body }).subscribe({});  
  }

  substract() {

  }

  search(): void {
    const headers = new HttpHeaders({
      player_id: `${this.playerId}`
    });

    this.playerService.item({ headers }).subscribe(res => {
      const { playerId, amount } = res.data.item;
      this.playerId = playerId;
      this.balance = amount;
    });

  }

}
