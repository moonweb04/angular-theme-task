import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../layouts/layout-dashboard/header/header.component';
import { FooterComponent } from '../layouts/layout-dashboard/footer/footer.component';
import { LayoutDashboardComponent } from '../layouts/layout-dashboard/layout-dashboard.component';
import { SidebarComponent } from '../layouts/layout-dashboard/sidebar/sidebar.component';



@NgModule({
  declarations: [HeaderComponent,FooterComponent,SidebarComponent,LayoutDashboardComponent],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,FooterComponent,SidebarComponent,LayoutDashboardComponent
  ]
})
export class CustomCommonModule { }
