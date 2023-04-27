import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Issue } from 'src/app/models/issue';

@Component({
  selector: 'app-displaytasks',
  templateUrl: './displaytasks.component.html',
  styleUrls: ['./displaytasks.component.scss']
})
export class DisplaytasksComponent {


  @Input() issues: Issue[];
  @Input() status: string;
  @Output() updateIssueStatus = new EventEmitter<{ issue: Issue, newStatus: string }>();

  onDragStart(event: DragEvent, issue: Issue): void {
    event.dataTransfer.setData('text/plain', issue.id.toString());
  }

  onDrop(event: DragEvent, newStatus: string): void {
    event.preventDefault();
    const issueId = parseInt(event.dataTransfer.getData('text/plain'));
    const issue = this.issues.find(issue => issue.id === issueId);
    if (issue) {
      this.updateIssueStatus.emit({ issue, newStatus });
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  getIssuesByStatus(status: string): Issue[] {
    return this.issues.filter(issue => issue.status === status);
  }
  
}

