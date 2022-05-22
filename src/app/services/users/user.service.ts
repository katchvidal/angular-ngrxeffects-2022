import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL = 'https://reqres.in/api/users'
  private URLSingleUser = 'https://reqres.in/api/users'
  constructor(private http: HttpClient) { }

  getUsers() {
    const URL = this.URL
    return this.http.get(URL).pipe(
      map((user: any) => {
        return user.data
      })
    )
  }

  getSingleUserbyID( id : number ){
    const URL = `${this.URLSingleUser}/${ id }`
    return this.http.get( URL ).pipe(
      map((user: any) => {
        return user.data
      })
    )
  }

}
