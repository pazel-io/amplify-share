import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegacyAmplifyUiModule } from '@aws-amplify/ui-angular/legacy';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatSnackBarModule,
    FormsModule,
    AmplifyAuthenticatorModule,
    LegacyAmplifyUiModule,
  ]
})
export class LoginModule { }
