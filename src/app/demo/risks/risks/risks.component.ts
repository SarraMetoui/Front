import { Component, OnInit } from '@angular/core';
import { RiskService } from 'src/app/services/risk.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Risk } from 'src/app/models/risk';
import { Issue } from 'src/app/models/issue';
import { IssuesService } from 'src/app/services/issues.service';
@Component({
  selector: 'app-risks',
  templateUrl: './risks.component.html',
  styleUrls: ['./risks.component.scss']
})
export class RisksComponent implements OnInit {

  constructor(private service: IssuesService) { }
  public issues: Issue[];
  



 
  ngOnInit(): void {
    this.getIssue();
    
  }

  public getIssue(): void {
    this.service.getIssues().subscribe(
      (response: Issue[]) => {
        this.issues = response;
        console.log(this.issues);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public remove(Id: number): void {
    this.service.deleteIssue(Id).subscribe(
      (response: void) => {
        console.log(response);
        this.getIssue();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
