import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPipe } from './pipe/user.pipe';



@NgModule({
  // declarations: [UserPipe],
  imports: [
    CommonModule
  ],
  // exports: [UserPipe]
})
export class CustomPipeModule { }
