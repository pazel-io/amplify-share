import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Auth } from 'aws-amplify';
import { APIService } from '../API.service';

@Component({
  selector: 'amplify-share-todo-add-dialog',
  templateUrl: 'todo-add-dialog.component.html',
})
export class TodoAddDialogComponent {
  value = '';

  constructor(private dialog: MatDialogRef<MatDialog>) {
  }

  public submit() {
    this.dialog.close(this.value);
  }
}

@Component({
  selector: 'amplify-share-graphql-share',
  templateUrl: './graphql-share.component.html',
  styleUrls: ['./graphql-share.component.scss']
})
export class GraphqlShareComponent implements OnInit {
  todos: any[] = [];
  user: any;

  constructor(private api: APIService, public dialog: MatDialog) {}

  async ngOnInit() {
    this.todos = (await this.api.ListTodos()).items;
    this.user = await Auth.currentUserInfo();
    this.api.OnCreateTodoListener(this.user.username).subscribe((value) => {
      this.todos.push(value.value.data?.onCreateTodo);
    });
    this.api.OnDeleteTodoListener(this.user.username).subscribe((value) => {
      const index = this.todos.findIndex(todo => todo.id === value.value.data?.onDeleteTodo.id);
      this.todos.splice(index, 1);
    });
  }

  async addTodo() {
    const matDialogRef = this.dialog.open(TodoAddDialogComponent);
    matDialogRef.afterClosed().toPromise().then((value) => {
      this.api.CreateTodo({
        name: value,
        description: this.user.attributes.email,
      });
    });
  }

  async removeTodo(id: string) {
    await this.api.DeleteTodo({
      id,
    });
  }

  async clearAll() {
    const items = (await this.api.ListTodos()).items as Array<{
      __typename: 'Todo';
      id: string;
      name: string;
      description?: string | null;
      createdAt: string;
      updatedAt: string;
    }>;
    items.forEach(async (todo) => this.api.DeleteTodo({id: todo.id}));
  }

}
