import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/app/models/issue';
import { IssuesService } from 'src/app/services/issues.service';

@Component({
  selector: 'app-issuetrack',
  templateUrl: './issuetrack.component.html',
  styleUrls: ['./issuetrack.component.scss']
})
export class IssuetrackComponent implements OnInit {

  constructor(private issueService: IssuesService) { }
  issues: Issue[] = [];
  error: string = '';

  ngOnInit(): void {
    this.getIssues();

  }
  getIssues(): void {
    this.issueService.getIssues()
      .subscribe(
        (data: Issue[]) => {
          this.issues = data;
        },
        (error) => {
          this.error = error;
        }
      );
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
  
}
