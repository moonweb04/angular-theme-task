import { Component, OnInit } from '@angular/core';
import {DashboardComponent} from '../../pages/dashboard/dashboard.component';


@Component({
  selector: 'app-layout-dashboard',
  templateUrl: './layout-dashboard.component.html',
  styleUrls: ['./layout-dashboard.component.css']
})
export class LayoutDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // declarations: [LayoutDashboardComponent];
  // declarations:[HeaderComponent,SidebarComponent,FooterComponent];

}
