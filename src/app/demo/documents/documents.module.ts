import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsRoutingModule } from './documents-routing.module';
import { DocumentsComponent } from './documents/documents.component';
import { UploadComponent } from './upload/upload.component';


@NgModule({
  declarations: [DocumentsComponent, UploadComponent],
  imports: [
    CommonModule,
    DocumentsRoutingModule
  ]
})
export class DocumentsModule { }
