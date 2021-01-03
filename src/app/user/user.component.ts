import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CrudService } from '../crud.service';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;

  constructor(
    private route: ActivatedRoute,
    private crud: CrudService,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.crud.get(`users/${id}`)
      .subscribe(response => this.user = response['data'])
  }

  back() {
    this.location.back();
  }
}
