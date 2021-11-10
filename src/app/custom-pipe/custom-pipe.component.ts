import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users = [
    {
      name: "John",
      address: "Doe",
      city: "abc",
      gender: "male",
      email: "john@example.com"
    },
    {
      name: "Mary",
      address: "Moe",
      city: "abc",
      gender: "female",
      email: "mary@example.com"
    },
    {
      name: "July",
      address: "Dooley",
      city: "abc",
      gender: "female",
      email: "july@example.com"
    }
  ]
}
