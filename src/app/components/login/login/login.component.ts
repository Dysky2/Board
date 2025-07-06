import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnInit, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { FirebaseService } from '../../../services/firebase.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../../auth/auth.service';
import { Router } from '@angular/router';
import { userService } from '../../../services/users.service';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder,
    private firebase: FirebaseService, 
    private router: Router,
    private _snackBar: MatSnackBar,
    private userService: userService,
    private authService: AuthService) {}

  
  ngOnInit(): void {
  }

  logIn() {
    
    this.userService.logIn(this.form.value as User).subscribe((sucess) => {
      if(sucess) {
        this.userService.getLoggedUser(this.form.value as User).pipe(
          tap(loggedUser => localStorage.setItem('token', loggedUser.userId))
        ).subscribe()
        location.href = '/dashboard';
        this._snackBar.open('Login succed', 'close', {
          duration: 3000
        })
      }
    })


    // this.authService.logIn(this.form.value.email!, this.form.value.password!).subscribe((done) => {
    //   if(done) {
    //     localStorage.setItem('token', this.authService.getLoginToken)
    //     this.router.navigate(['./dashboard'])
    //     this._snackBar.open('Login succed', 'close', {
    //       duration: 3000
    //     })
    //   }
    // })

  }


  // getHello(): Observable<any> {
  //   return this.http.get(`${this.baseurl}/hello`);
  // }

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ["", Validators.required]
  })


}
