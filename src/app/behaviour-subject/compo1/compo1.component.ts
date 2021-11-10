import { Component, OnInit } from '@angular/core';
import { CustomServiceService } from 'src/app/custom-service.service';

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css']
})
export class Compo1Component implements OnInit {

  constructor(private behaviorService: CustomServiceService) { 
    this.behaviorService.userName.subscribe(behavior => {
      this.userName = behavior
    })
  }

  ngOnInit(): void {
  }

  userName;

  onAdd(uname){
    // this.userName = uname.value;
    this.behaviorService.userName.next(uname.value)
  }
}
