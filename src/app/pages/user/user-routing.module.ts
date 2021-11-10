import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserListingComponent } from './user-listing/user-listing.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'add', pathMatch: 'full'
  },
  
  {
    path: 'add',
    component: AddUserComponent
  },

  {
    path: 'update',
    component: UpdateUserComponent,
  },

  // {
  //   path: 'delete',
  //   component: DeleteUserComponent,
  // },
  {
    path: 'listing',
    component: UserListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
