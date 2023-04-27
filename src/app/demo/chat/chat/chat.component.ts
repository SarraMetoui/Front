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
export class ChatComponent {
  public dashboardUrl = 'http://localhost:5000/d/e1204554-8721-41b7-ac53-0975167fa131/new-dashboard?orgId=1&from=1682599830992&to=1682621430992&viewPanel=1';

}