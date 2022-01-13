import { Component, OnInit } from '@angular/core';
import { APIService } from '../API.service';
import { Auth, Hub } from 'aws-amplify';

@Component({
  selector: 'amplify-share-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  title = 'amplify-share';
  showLoginForm = false;

  constructor(private api: APIService) {
    Auth.currentUserInfo().then(user => {
      console.log('user', user);
      this.showLoginForm = !user;
    });

    const listener = (data: any) => {
      switch (data.payload.event) {
        case 'signIn':
          console.log('user signed in');
          this.showLoginForm = false;
          break;
        case 'signOut':
          console.log('user signed out');
          this.showLoginForm = true;
          break;
      }
    }
    Hub.listen('auth', listener);
  }

  async ngOnInit() {
    const todos = await this.api.ListTodos();
    this.api.OnCreateTodoListener.subscribe((value) => {
      console.log('onCreateTodo', value);
    });
  }

  async addTodo(todo: string) {
    const added = await this.api.CreateTodo({
      name: `New item add by ${todo}`,
      description: `Time: ${new Date().toISOString()}`,
    });
  }

  async clearAll() {
    const items = (await this.api.ListTodos()).items as Array<{
      __typename: "Todo";
      id: string;
      name: string;
      description?: string | null;
      createdAt: string;
      updatedAt: string;
    }>;
    items.forEach(async (todo) => this.api.DeleteTodo({id: todo.id}));
  }

  onCreateTodo() {
    this.api.OnCreateTodoListener.subscribe((value) => {
      console.log('onCreateTodo', value);
    });
  }
}
