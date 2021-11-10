import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  reactiveForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      "email": new FormControl(null,[Validators.required,Validators.email]),
      "password": new FormControl(null,[Validators.required]),
      "address": new FormControl(null,[Validators.required]),
      "city": new FormControl(null,[Validators.required]),
      "state": new FormControl(null,[Validators.required])
    })
  }

  clickReactive(){
    console.log(this.reactiveForm.value);
  
  }

}
