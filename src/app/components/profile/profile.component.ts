import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { User } from '../../interfaces/user';
import { BaseComponent } from '../base/base.component';
import { Observable, of, switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';
import { userService } from '../../services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent extends BaseComponent implements OnInit{
  $loggedUser: Observable<string>;
  $isLogged: Observable<boolean>;
  
  constructor(public authService: AuthService, private firebaseService: FirebaseService, private router: Router, private userService: userService) {
    super();
  }

  ngOnInit(): void {
    this.getLoggedUser();
    this.isLogin();
  }

  getLoggedUser() {
    this.$loggedUser = this.userService.getUserById(this.authService.getTokenFromLocalStorage as string).pipe(
      switchMap((user) => of(user['username']))
    )
  }

  openShoppingCart() {
    this.router.navigate(['/cart'])
  }

  isLogin() {
    this.$isLogged = of(this.authService.isLoggedIn);
  }

  logOut() {
    this.authService.logout();
    this.isLogin();
  }


}
