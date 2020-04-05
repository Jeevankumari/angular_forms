import { Component, OnInit} from '@angular/core';
import { SingleUserService } from './single-user.service';
import { SingleUser } from './single-user'
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  providers: [SingleUserService]
})
export class SingleUserComponent implements OnInit { 
  user : SingleUser[];
  
  constructor( private SingleUserService: SingleUserService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = history.state.data.data;
  }
}