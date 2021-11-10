import { Component, OnInit } from '@angular/core';
import { CustomServiceService } from 'src/app/custom-service.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  Component1Data: any = '';  

  constructor(private DataSharing: CustomServiceService) { 
    this.DataSharing.shareData.subscribe((res: any) => {  
      this.Component1Data = res;  
    })  
  }

  ngOnInit(): void {
  }
  
  onSubmit(data) {  
    this.DataSharing.shareData.next(data.value);  
  }  

}
