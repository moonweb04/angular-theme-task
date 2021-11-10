import { Component, OnInit } from '@angular/core';
import { CustomServiceService } from 'src/app/custom-service.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  Component2Data: any = '';  

  constructor(private DataSharing: CustomServiceService) {  
    this.DataSharing.shareData.subscribe((res: any) => {  
      this.Component2Data = res;  
    })  
  }  

  ngOnInit(): void {
  }

  onSubmit(data) {  
    this.DataSharing.shareData.next(data.value);  
  } 
}
