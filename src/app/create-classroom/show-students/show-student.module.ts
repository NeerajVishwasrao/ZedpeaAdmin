import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowStudentRoutingModule } from './show-student-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ShowStudentRoutingModule
  ],
  exports:[
    ShowStudentRoutingModule

  ]
})
export class ShowStudentModule { }
