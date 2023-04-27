import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meeting } from 'src/app/models/meeting';
import { MeetingService } from 'src/app/services/meeting.service';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})
export class MeetingComponent implements OnInit {

  constructor(private service: MeetingService) { }
  public meetings: Meeting[];

  ngOnInit(): void {
    this.getMeeting();

  }
  public getMeeting(): void {
    this.service.getMeetings().subscribe(
      (response: Meeting[]) => {
        this.meetings = response;
        console.log(this.meetings);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
