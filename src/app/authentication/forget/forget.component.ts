import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {

  forgetForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.forgetForm = new FormGroup({
      'forgetData': new FormGroup({
        'name': new FormControl(null, [Validators.required])
      })
    })
  }

  OnForget(){
    console.log(this.forgetForm.value);
    
  }
}
