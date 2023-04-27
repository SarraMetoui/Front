import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TopicService } from 'src/app/services/topic.service';
import { NgForm } from '@angular/forms';
import { Topic } from 'src/app/models/topics';
import { Location } from '@angular/common';
import { IssuesService } from 'src/app/services/issues.service';
import { Issue } from 'src/app/models/issue';
import { MeetingService } from 'src/app/services/meeting.service';
import { Meeting } from 'src/app/models/meeting';

@Component({
  selector: 'app-addtasks',
  templateUrl: './addtasks.component.html',
  styleUrls: ['./addtasks.component.scss']
})
export class AddtasksComponent implements OnInit {
 
  constructor(private meetingService: MeetingService, private issueService: IssuesService, private location: Location, private service: TopicService, private router: ActivatedRoute) { }
  data:any;
  data2:any
  data3:any;
  id:any; 
  public topic: Topic[];
  selectedDate: Date;
  meetings: Meeting[];
  
  filteredMeetings: any;
  // issues: Issue[];
  // pending: Issue[] = [];
  // inProgress: Issue[] = [];
  // done: Issue[] = [];
   issues: Issue[] = [];
  error: string = '';
  ngOnInit(): void {
    console.log('hi');

    console.log(this.router.snapshot.params.id);
    this.id= this.router.snapshot.params.id; 
    this.getDetails(); 
    this.getIssues();
    this.getMeeting();
  }

  filterMeetings(month: string): void {
    if (!month) {
      this.filteredMeetings = this.data2;
    } else {
      this.filteredMeetings = this.data2.filter(data2 => data2.month === month);
    }
  }
  getMeeting()
  { 
   this.meetingService.getProjectMeetings(this.id).subscribe(data2=>
    {  console.log(data2);
        this.data2=data2[0];
        this.filteredMeetings = data2[0];
        console.log(this.data2);
    }
   )
  }
  
  getDetails()
  { 
   this.service.getProjectTopics(this.id).subscribe(data=>
    {  
        this.data=data[0];
        console.log(this.data)
    }
   )
  }
  getIssues()
  { 
   this.issueService.getProjectIssues(this.id).subscribe(data3=>
    {  
        this.data3=data3[0];
        console.log(this.data3)
    }
   )
  }
  
  
  // getIssues2()
  // { 
  //  this.issueService.getProjectIssues(this.id).subscribe(data=>
  //   {  
  //       this.data2=data[0];
  //       console.log(this.data)
  //   }
  //  )
  // }


  public remove(Id: number): void {
    this.service.deleteTopic(Id).subscribe(
      (response: void) => {
        console.log(response);
        this.getDetails();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  
  public onAddPromotion(addForm: NgForm): void {
    document.getElementById('add-employee-form').click();
    // const projectId = this.route.snapshot.paramMap.get('id');
    this.service.addTopic2(addForm.value,this.id).subscribe(
      (response: Topic) => {
        console.log(response);
        this.getDetails();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
  goBack(): void {
    this.location.back();
  }
  
  
  updateIssueStatus(issue: Issue, newStatus: string): void {
    issue.status = newStatus;
    this.issueService.updateStatus(issue.id, newStatus)
      .subscribe(
        (data) => {
          console.log('Issue status updated successfully');
        },
        (error) => {
          console.log('Failed to update issue status:', error);
          // Revert status change if update failed
          issue.status = issue.status;
        }
      );
  }
  
  // getIssues(): void {
  //   this.issueService.getIssues()
  //     .subscribe(
  //       (data: Issue[]) => {
  //         this.issues = data;
  //       },
  //       (error) => {
  //         this.error = error;
  //       }
  //     );
  // }
                                                                                                              
  public onAddPromotion2(addForm2: NgForm): void {
    document.getElementById('add-employee-form').click();
    // const projectId = this.route.snapshot.paramMap.get('id');
    this.issueService.addissue(addForm2.value,this.id).subscribe(
      (response: Issue) => {
        console.log(response);
        this.getIssues();
        addForm2.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm2.reset();
      }
    );
  } 

  public onAddPromotion3(addForm3: NgForm): void {
    document.getElementById('add-employee-form').click();
    // const projectId = this.route.snapshot.paramMap.get('id');
    this.meetingService.addmeeting(addForm3.value,this.id).subscribe(
      (response: Meeting) => {
        console.log(response);
        this.getMeeting();
        addForm3.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm3.reset();
      }
    );
  } 
 
  
}
