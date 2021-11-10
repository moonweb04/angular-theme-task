import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css']
})
export class UserListingComponent implements OnInit {

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
