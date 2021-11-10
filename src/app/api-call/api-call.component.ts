import { Component, OnInit } from '@angular/core';
import { CustomServiceService } from '../custom-service.service';

@Component({
  selector: 'app-api-call',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.css']
})
export class ApiCallComponent implements OnInit {
  apiData: any;

  constructor(private custom:CustomServiceService) { }

  ngOnInit(): void {
    this.custom.getData().subscribe( data => {
      console.log(data);
      this.apiData = data 
    })
  }


}
