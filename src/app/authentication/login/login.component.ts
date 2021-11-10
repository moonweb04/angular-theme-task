import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomServiceService } from 'src/app/custom-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup;

  constructor(private router: Router, private auth: CustomServiceService) { }

  ngOnInit(): void {
    this.LoginForm = new FormGroup({
    'loginData' : new FormGroup({
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required]),
  }),
})
  }

  onSubmit(){
    if(this.LoginForm.valid) {
      console.log(this.LoginForm.value);
      this.auth.sendToken(this.LoginForm.value.email)
      this.router.navigate(['/dashboard']);
    }
    
  }
}
