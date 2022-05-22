import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit {
  idUser : any;
  User: any;
  constructor( private route: ActivatedRoute, private userService : UserService ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      param => {
        this.idUser = param['id']
      }
      
    )
    
    setTimeout(() => {
      
      this.userService.getSingleUserbyID( this.idUser ).subscribe(
        res => this.User = res 
      )
    }, 2000);
  }

}
