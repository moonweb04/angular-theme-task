import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm: FormGroup;


  constructor(private router:Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'registerData': new FormGroup({
        'name': new FormControl(null,[Validators.required]),
        'email': new FormControl(null, [Validators.required]),
        'password': new FormControl(null, [Validators.required]),
        'repassword': new FormControl(null, [Validators.required])
      })
    })
  }

  OnRegister(){
    console.log(this.registerForm.value); 
    this.router.navigate(['/home']);
  }
}
