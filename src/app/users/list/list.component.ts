import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/users/user.model';
import { UserService } from 'src/app/services/users/user.service';
import { AppState } from 'src/app/store/app.reducers';
import * as UsersAction from '../../store/actions'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {
  Users : any[] = []
  error : any;
  loading: any;
  constructor(private store: Store <AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(UsersAction.CARGAR_USUARIOS())
    this.store.select('users').subscribe( users => {
     this.Users = users.user
     this.loading = users.loading
    })
  }

}
