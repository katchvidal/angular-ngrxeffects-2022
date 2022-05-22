import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/users/user.model';
import { AppState } from 'src/app/store/app.reducers';
import * as OneUserAction from '../../store/actions'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit {
  User: any ;
  error : any
  constructor( private route: ActivatedRoute, private store : Store<AppState>) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      param => {
        const id = param['id']
        this.store.dispatch(OneUserAction.CARGAR_USUARIO({ id }))   
      }     
    )
    
    this.store.select('user').subscribe(
      user => {
        console.log( user )
        this.User = user.user
        this.error = user.error
      }
    )
  }

}
