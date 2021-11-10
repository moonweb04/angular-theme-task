import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UserListingComponent } from './user-listing/user-listing.component';
import { LayoutDashboardComponent } from 'src/app/layouts/layout-dashboard/layout-dashboard.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderComponent } from 'src/app/layouts/layout-dashboard/header/header.component';
import { FooterComponent } from 'src/app/layouts/layout-dashboard/footer/footer.component';
import { SidebarComponent } from 'src/app/layouts/layout-dashboard/sidebar/sidebar.component';
import { CustomCommonModule } from 'src/app/custom-common/custom-common.module';
// import { UserPipe } from './user-listing/pipe/user.pipe';
// import { AppModule } from 'src/app/app.module';


@NgModule({
  declarations: [AddUserComponent, UpdateUserComponent, DeleteUserComponent, UserListingComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    // LayoutDashboardComponent,
    ReactiveFormsModule,
    FormsModule,
    CustomCommonModule
    // AppModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule { }
