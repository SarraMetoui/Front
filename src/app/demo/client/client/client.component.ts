import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  constructor(private router: ActivatedRoute, private service: ClientService) { }
  public clients: Client[];
  alert: boolean=false;
  ngOnInit(): void {
    this.getClient();
  }

  public getClient(): void {
    this.service.getClient().subscribe(
      (response: Client[]) => {
        this.clients = response;
        console.log(this.clients);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public remove(promotionId: number): void {
    this.service.deleteClient(promotionId).subscribe(
      (response: void) => {
        console.log(response);
        this.getClient();
       

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  

  public search(key: string): void {
    console.log(key);
    const results: Client[] = [];
    for (const p of this.clients) {
      if (
       p.name.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(p);
      }
    }
    this.clients = results;
    if (results.length === 0 || !key) {
      this.getClient();
    }
  }
  closeAlert()
  {
    this.alert=false;
  }

  
  public onAddPromotion(addForm: NgForm): void {
    document.getElementById('add-employee-form').click();
    this.service.addClient(addForm.value).subscribe(
      (response: Client) => {
        console.log(response);
        this.getClient();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateEmloyee(promotion: Client): void {
    this.service.updateClient(this.router.snapshot.params.id, promotion).subscribe(
      (response: Client) => {
        console.log(response);
        this.getClient();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  
}
