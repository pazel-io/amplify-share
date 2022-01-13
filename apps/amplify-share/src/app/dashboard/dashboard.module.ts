import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegacyAmplifyUiModule } from '@aws-amplify/ui-angular/legacy';
import { FileShareModule } from '../file-upload/file-share.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatSnackBarModule,
    FormsModule,
    AmplifyAuthenticatorModule,
    LegacyAmplifyUiModule,
    FileShareModule,
  ]
})
export class DashboardModule { }
