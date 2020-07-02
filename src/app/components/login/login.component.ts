import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMsg = '';

  constructor(
    private formBuilder: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      pass: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  goToLogin(): void{
    this.errorMsg ='';
    // get the authentication values
    const {email, pass} = this.loginForm.value;
    // get the promise of the authentication
    let signInPromise = this.afAuth.signInWithEmailAndPassword(email,pass);
    // Act according to the result of the authentication
    signInPromise.then((user) =>{
      this.router.navigate(['home']);
    }).catch((message) => {
      this.errorMsg = message;
    });
  }

}
