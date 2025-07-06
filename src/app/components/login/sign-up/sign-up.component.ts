import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../../../services/firebase.service';
import { User } from '../../../interfaces/user';
import {v4 as uuidv4} from 'uuid';
import { BaseComponent } from '../../base/base.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../../auth/auth.service';
import { userService } from '../../../services/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent extends BaseComponent {
  constructor(
      private fb: FormBuilder, 
      private router: Router, 
      private firebase: FirebaseService, 
      private _snackBar: MatSnackBar,
      private userService: userService,
      private authService: AuthService) {
    super();
  }
  
  ngOnInit(): void {
  }

  createAccount() {

    this.userService.isAccountExists(this.form.value as User).subscribe((isAccountExist) => {
      if(!isAccountExist) {
        this.userService.createUser(this.form.value as User).subscribe((user: User) => {
          console.log(user)
          this._snackBar.open('Account created', 'close', {
            duration: 2000,
          });
          this.router.navigate(['./dashboard']);
          localStorage.setItem('token', user.userId)
        });
      } else{ 
        this._snackBar.open('Account with this data exists', 'close', {
          duration: 3000,
        })
      }
    })

    console.log(this.form.value as User);

    // this.userService.createUser(this.form.value as User).subscribe((test) => {
    //   console.log(test);
    // });

    // this.authService.isAccountExist(this.form.value.username!, this.form.value.email!).subscribe((canCreate) => {
    //   if(canCreate) {
    //     this.firebase.addUser(this.form.value as User).subscribe((userId) => {
    //       this._snackBar.open('Account created', 'close', {
    //         duration: 2000,
    //       });
    //       this.router.navigate(['./dashboard']);
    //       console.log(userId);
    //       localStorage.setItem('token', userId.name)
    //     })
    //   } else {
    //     this._snackBar.open('Account with this data exists', 'close', {
    //       duration: 3000,
    //     })
    //   }
    // })
  }

  form = this.fb.group({
    user_id: [''],
    name: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ["", Validators.required]
  })


}
