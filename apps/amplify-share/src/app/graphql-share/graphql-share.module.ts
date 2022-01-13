import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { GraphqlShareComponent, TodoAddDialogComponent } from './graphql-share.component';



@NgModule({
  declarations: [
    GraphqlShareComponent,
    TodoAddDialogComponent,
  ],
  exports: [
    GraphqlShareComponent,
    TodoAddDialogComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
  ]
})
export class GraphqlShareModule { }
