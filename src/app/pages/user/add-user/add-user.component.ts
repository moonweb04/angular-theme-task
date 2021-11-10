import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomServiceService } from 'src/app/custom-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  AddForm: FormGroup;
  apiData: any;

  constructor(private router: Router, private custom: CustomServiceService) { 
    
  }

  ngOnInit(): void {
    this.AddForm = new FormGroup({
      'addData' : new FormGroup({
        name: new FormControl(null,[Validators.required]),
        address: new FormControl(null,[Validators.required]),
        city: new FormControl(null,[Validators.required]),
        email: new FormControl(null,[Validators.required]),   
    }),
  })

  this.custom.getData().subscribe( data => {
    console.log(data);
    this.apiData = data 
  })
    
  }




  onSubmit(){
    console.log(this.AddForm.value);
    // this.router.navigate(['/dashboard']);
    // this.custom.getData().subscribe( data => {
    //   console.log(data);
      
    // })
  }

  // adduserData(data){
  //   this.http.getData().subscribe(data => {})
  
  // }

}
