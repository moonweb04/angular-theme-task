import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-databinding',
  templateUrl: './twoway-databinding.component.html',
  styleUrls: ['./twoway-databinding.component.css']
})
export class TwowayDatabindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  uname:string="Two way";
}
