import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(private crud: CrudService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.crud.get('users')
      .subscribe(response => this.users = response['data'])
  }

  onAdd(first_name, last_name, email) {
    this.crud.post('register', { email, first_name, last_name })
    .subscribe(response => this.users.push(response as User))
  }

  onDelete(id: number) {
    this.crud.delete(`delete/${id}`)
      .subscribe(response => this.users = this.users.filter(user => user.id !== id))
  }
}
