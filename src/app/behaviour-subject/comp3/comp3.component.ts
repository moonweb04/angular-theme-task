import { Component, OnInit } from '@angular/core';
import { CustomServiceService } from 'src/app/custom-service.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

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
