import { Component, OnInit } from '@angular/core';
import { RiskService } from 'src/app/services/risk.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Risk } from 'src/app/models/risk';
@Component({
  selector: 'app-risks',
  templateUrl: './risks.component.html',
  styleUrls: ['./risks.component.scss']
})
export class RisksComponent implements OnInit {

  constructor(private service: RiskService) { }
  public risks: Risk[];
  public des: Risk[];
  public fronts: Risk[];
  public backs: Risk[];
  public tests: Risk[];
  public cons: Risk[];



 
  ngOnInit(): void {
    this.getRisk();
    this.getDesign();
    this.getFront(); 
    this.getBack();
    this.getTest(); 
    this.getConception();

  }

  public getRisk(): void {
    this.service.getRisk().subscribe(
      (response: Risk[]) => {
        this.risks = response;
        console.log(this.risks);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getDesign(): void {
    this.service.getDesign().subscribe(
      (response: Risk[]) => {
        this.des = response;
        console.log(this.des);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  } public getFront(): void {
    this.service.getFront().subscribe(
      (response: Risk[]) => {
        this.fronts = response;
        console.log(this.fronts);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  } public getBack(): void {
    this.service.getBack().subscribe(
      (response: Risk[]) => {
        this.backs = response;
        console.log(this.backs);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  } public getTest(): void {
    this.service.getTest().subscribe(
      (response: Risk[]) => {
        this.tests = response;
        console.log(this.tests);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  } public getConception(): void {
    this.service.getConception().subscribe(
      (response: Risk[]) => {
        this.cons = response;
        console.log(this.cons);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
