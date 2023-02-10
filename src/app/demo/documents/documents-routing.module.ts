import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentsComponent } from './documents/documents.component';
import { UploadComponent } from './upload/upload.component';


const routes: Routes = [
  {
    path:'',
    component: DocumentsComponent
  },
  {
    path:'upload',
    component: UploadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsRoutingModule { }
