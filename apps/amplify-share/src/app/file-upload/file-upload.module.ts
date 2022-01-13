import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LegacyAmplifyUiModule } from '@aws-amplify/ui-angular/legacy';
import { FileUploadComponent } from './file-upload.component';

@NgModule({
  declarations: [
    FileUploadComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LegacyAmplifyUiModule,
  ],
  exports: [
    FileUploadComponent,
  ]
})
export class FileUploadModule { }
