import { Component, OnInit } from '@angular/core';
import { CustomServiceService } from 'src/app/custom-service.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

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
