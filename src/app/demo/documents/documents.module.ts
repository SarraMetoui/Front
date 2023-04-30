import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsRoutingModule } from './documents-routing.module';
import { DocumentsComponent } from './documents/documents.component';
import { UploadComponent } from './upload/upload.component';
import { FormsModule } from '@angular/forms';
import { BytesPipe } from './upload/bytes.pipe';


@NgModule({
  declarations: [DocumentsComponent, UploadComponent, BytesPipe],
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    FormsModule
  ]
})
export class DocumentsModule { }
