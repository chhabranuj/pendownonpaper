import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';
import { UploadComponent } from './components/upload/upload.component';
import { AddDeleteDataComponent } from './components/add-delete-data/add-delete-data.component';

const routes: Routes = [
  {path: '', component: MainContentComponent},
  {path: "upload", component: UploadComponent},
  {path: "addDeleteData", component: AddDeleteDataComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
