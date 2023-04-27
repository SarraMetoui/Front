import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../services/web-socket.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-chatting',
  templateUrl: './chatting.component.html',
  styleUrls: ['./chatting.component.scss']
})
export class ChattingComponent implements OnInit {
  messages: string[] = [];
  sender: string = 'Me';
  newMsg: string = '';

  constructor(private location: Location,private wsService: WebsocketService) {}

  ngOnInit(): void {
    const chatHistory = JSON.parse(localStorage.getItem('chatHistory') || '[]');
  this.messages = chatHistory;
    this.wsService.getMsgs().subscribe((msg: string) => {
      this.messages.push(msg);
      console.log(msg);
      this.wsService.saveMsgsToLocalStorage(this.messages);

    });
  }

  sendMsg(): void {
    if (this.newMsg.trim() !== '') {
      this.messages.push(`[${this.sender}] ${this.newMsg}`);
      this.wsService.sendMsg(this.newMsg);
      this.newMsg = '';
      this.wsService.saveMsgsToLocalStorage(this.messages);

    }
  }
  goBack(): void {
    this.location.back();
  }
}