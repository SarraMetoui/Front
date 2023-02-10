import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TopicService } from 'src/app/services/topic.service';
import { Topic } from 'src/app/models/topics';
import { Document } from 'src/app/models/document';

import { DocumentService } from 'src/app/services/document.service';
@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  public topics: Topic[];
  public documents: Document[];
  img: any; 
  nbImages: any;
  video: any;
  nbVideos: any;
  nbPdf: any;
  pdf: any;
  nbAudio: any;
  audio: any

  constructor( private servicetopic: TopicService, private service: DocumentService) { }

  ngOnInit(): void {
    this.getTopics();
    this.getDocs();
    this.getNbimages();
    this.getNbvideos();
    this.getNbpdf();
    this.getNbAudio();
  }

  public getTopics(): void {
    this.servicetopic.getTopics().subscribe(
      (response: Topic[]) => {
        this.topics = response;
        console.log(this.topics);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getDocs(): void {
    this.service.getDocument().subscribe(
      (response: Document[]) => {
        this.documents = response;
        console.log(this.documents);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getNbimages(): void {
    this.service.getImages().subscribe(
      (response: any) => {
        
        this.nbImages= response[0][0].img;
        console.log(  response[0][0].img);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getNbvideos(): void {
    this.service.getVideos().subscribe(
      (response: any) => {
        
        this.nbVideos= response[0][0].vid;
        console.log(  response[0][0].vid);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getNbpdf(): void {
    this.service.getPdf().subscribe(
      (response: any) => {
        
        this.nbPdf= response[0][0].pdf;
        console.log(  response[0][0].pdf);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getNbAudio(): void {
    this.service.getAudio().subscribe(
      (response: any) => {
        
        this.nbAudio= response[0][0].audio;
        console.log(  response[0][0].audio);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public search(key: string): void {
    console.log(key);
    const results: Document[] = [];
    for (const p of this.documents) {
      if (
       p.name.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(p);
      }
    }
    this.documents = results;
    if (results.length === 0 || !key) {
      this.getDocs();
    }
  }

}

