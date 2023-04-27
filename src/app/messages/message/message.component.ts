import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

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