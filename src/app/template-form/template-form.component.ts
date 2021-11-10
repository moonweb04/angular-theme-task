import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  // @ViewChild("myForm")myForm:NgForm
  ngOnInit(): void {
  }

  model: any = {};

  onSubmit() {
    alert('SUCCESS' + JSON.stringify(this.model))
    console.log();
    
  }

  // clickTemplate(form:NgForm){
  //   console.log(form.value);
    
  // }

}
