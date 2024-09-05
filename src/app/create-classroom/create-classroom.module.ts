import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateClassroomRoutingModule } from './create-classroom-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CreateClassroomRoutingModule
  ],

  exports:[
    CreateClassroomRoutingModule
  ]
})
export class CreateClassroomModule { }
