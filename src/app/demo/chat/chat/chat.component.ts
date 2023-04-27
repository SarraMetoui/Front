import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Message } from '../../../models/chat';
import { WebSocketSubject } from 'rxjs/webSocket';
import { WebsocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages: string[] = [];
  sender: string = 'Me';
  newMsg: string = '';

  constructor(private wsService: WebsocketService) {}

  ngOnInit(): void {
    this.wsService.getMsgs().subscribe((msg: string) => {
      this.messages.push(msg);
    });
  }

  sendMsg(): void {
    if (this.newMsg.trim() !== '') {
      this.messages.push(`[${this.sender}] ${this.newMsg}`);
      this.wsService.sendMsg(this.newMsg);
      this.newMsg = '';
    }
  }
}