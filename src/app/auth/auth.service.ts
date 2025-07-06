import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable, switchMap, take, tap } from 'rxjs';
import { User } from '../interfaces/user';
import {v4 as uuidv4} from 'uuid';
import { BaseComponent } from '../components/base/base.component';
import { FirebaseService } from '../services/firebase.service';
import { userService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseComponent{
  private token: string = '';

  constructor(private http: HttpClient, private firebase: FirebaseService, private userService: userService) {
    super();
  }

  isAccountExist(username: string, email: string) {
    return this.firebase.getAllUsers().pipe(
      tap(() => {
        this.token = uuidv4();
      }),
      switchMap((users) => {
        return this.firebase.getUser(this.findUserId(users, email, username))
      }),

      map(value => value === null),
    );
  }

  logIn(user: User) {
    this.userService.getLoggedUser(user).subscribe((loggeedUser) => {
      this.token = loggeedUser.userId;
    })
  }
  
  // logIn(email: string, password: string): Observable<boolean> {
  //   return this.firebase.getAllUsers().pipe(
  //     tap((token) => this.token = this.findUserId(token, email)),
  //     switchMap((users) => {
  //       return Object.values(users)
  //     }),
  //     filter(user => user.email === email && user.password === password),
  //     map(value => !!value)
  //   );
  // }

  findUserId(allUsers: User[], email?: string, username?: string): string {
    // console.log(
    //   Object.keys(allUsers)[
    //     Object.values(allUsers).indexOf(Object.values(allUsers).filter((user: User) => user.email === email || user.username === username)[0])
    //   ]
    // );

    return Object.keys(allUsers)[
      Object.values(allUsers)
      .indexOf(Object.values(allUsers)
      .filter((user: User) => user.email === email || user.username === username)[0])
    ]
  }

  // 
  logout() {
    this.token = '';
    localStorage.setItem('token', '');
    window.location.reload();
  }

  get isLoggedIn() { return localStorage.getItem('token') !== ''; }

  get getLoginToken() {return this.token; }

  get getTokenFromLocalStorage() {return localStorage.getItem('token');}
}
