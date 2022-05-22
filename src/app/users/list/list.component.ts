import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/users/user.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {
  Users : any[] = []
  constructor( private userService : UserService ){}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
     ( users ) => {
       this.Users = users
     }
    )
  }



}
