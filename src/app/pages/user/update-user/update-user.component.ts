import { HttpClient } from '@angular/common/http';
import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomServiceService } from 'src/app/custom-service.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private router: Router,private http: CustomServiceService) { }

  UpdateForm: FormGroup;

  ngOnInit(): void {
    this.UpdateForm = new FormGroup({
      'updateData' : new FormGroup({
        name: new FormControl(null,[Validators.required]),
        address: new FormControl(null,[Validators.required]),
        city: new FormControl(null,[Validators.required]),
        email: new FormControl(null,[Validators.required]),
    }),
  })
  }

  onSubmit(){
    console.log(this.UpdateForm.value);
    // this.router.navigate(['/dashboard']);
  }
  // updateuserData(data){
  //   this.http.updateData.subscribe(data => {})
  // }
}
