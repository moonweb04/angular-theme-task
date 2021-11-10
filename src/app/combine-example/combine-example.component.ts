import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combine-example',
  templateUrl: './combine-example.component.html',
  styleUrls: ['./combine-example.component.css']
})
export class CombineExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  indian =[];
  pushIndians(data){
    this.indian.push(data);
  }
  onRemoveIndians(item){
    this.indian.splice(item, 1)
  }

  
  american =[];
  pushAmericans(data){
    this.american.push(data);
  }
  onRemoveAmericans(item){
    this.american.splice(item, 1)
  }


}
