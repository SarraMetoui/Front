import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafanadash',
  templateUrl: './grafanadash.component.html',
  styleUrls: ['./grafanadash.component.scss']
})
export class GrafanadashComponent {

  public dashboardUrl = 'http://localhost:5000/d/e1204554-8721-41b7-ac53-0975167fa131/new-dashboard?orgId=1&from=1682599830992&to=1682621430992&viewPanel=1';

}
