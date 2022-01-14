import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LegacyAmplifyUiModule } from '@aws-amplify/ui-angular/legacy';
import { FileShareComponent } from './file-share.component';

@NgModule({
  declarations: [
    FileShareComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LegacyAmplifyUiModule,
  ],
  exports: [
    FileShareComponent,
  ]
})
export class FileShareModule { }
