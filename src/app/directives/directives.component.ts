import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // games = [
  //   {
  //     game:"COD",
  //     description: "Survivor"
  //   },
  //   {
  //     game:"GTA",
  //     description: "Open World"
  //   },
  //   {
  //     game:"PubG",
  //     description: "Survivor"
  //   },
  //   {
  //     game:"Cricket",
  //     description: "Sport"
  //   }
  // ];

  // favorites = [
  //   {
  //     game: "PubG",
  //     description: "Survivor"
  //   },
  //   {
  //     game: "NFS",
  //     description: "Racing"
  //   },
  //   {
  //     game: "Football",
  //     description: "Sport"
  //   },
  //   {
  //     game: "Cricket",
  //     description: "Sport"
  //   }
  // ]

  // viewTab = "Other";

  games = [ 
    {
      title:"COD",
      description: "Survivor"
    },
    {
      title:"GTA",
      description: "Open World"
    },
    {
      title:"PubG",
      description: "Survivor"
    },
    {
      title:"Cricket",
      description: "Sport"
    }
  ];

  favs = [ 
    {
          title: "PubG",
          description: "Survivor"
        },
        {
          title: "NFS",
          description: "Racing"
        },
        {
          title: "Football",
          description: "Sport"
        },
        {
          title: "Cricket",
          description: "Sport"
        } 
     ]

  viewTab = 'someothertab';

}
