import { Injectable } from '@angular/core';
import * as WebSocket from 'ws';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
    private socket$: WebSocketSubject<any>;

    constructor() {
      this.socket$ = webSocket('ws://localhost:8080');
    }
  
    sendMsg(msg: string): void {
      this.socket$.next(msg);
    }
  
    getMsgs() {
      return this.socket$.asObservable();
    }
    saveMsgsToLocalStorage(messages: string[]): void {
      localStorage.setItem('chatHistory', JSON.stringify(messages));
    }
}
