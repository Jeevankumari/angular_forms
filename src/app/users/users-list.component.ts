import { Component, OnInit } from '@angular/core';
import { UsersListService } from './users-list.service';
import { SingleUserService } from './single-user.service';
import { Users } from './users';
import { SingleUser } from './single-user'
import { Router } from "@angular/router";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  providers: [UsersListService, SingleUserService]
})
export class UsersListComponent implements OnInit {
  users : Users[];
  singleuser : SingleUser[];
  
  constructor( private UsersListService: UsersListService,
    private SingleUserService: SingleUserService,
    private router: Router ) { }

  ngOnInit() {
     this.UsersListService.getUsers()
      .subscribe((usersData) => this.users = usersData);
  }
  
  userDisplay(id: number){
    this.SingleUserService.getUserDetail(id)
      .subscribe((data) => 
      {this.singleuser = data;
        this.router.navigate(['/user/'+id], {state: {data: this.singleuser} });
      })
  }
}
