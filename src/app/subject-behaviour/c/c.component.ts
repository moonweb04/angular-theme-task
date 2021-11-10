import { Component, OnInit } from '@angular/core';
import { CustomServiceService } from 'src/app/custom-service.service';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CComponent implements OnInit {


  Component3Data: any = '';

  constructor(private DataSharing:CustomServiceService) { 
    this.DataSharing.shareData.subscribe((res: any) => {  
      this.Component3Data = res;  
  })
}

ngOnInit(): void {
}

onSubmit(data) {  
  this.DataSharing.shareData.next(data.value);  
} 

}
