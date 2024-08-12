import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateExamRoutingModule } from './create-exam-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CreateExamRoutingModule
  ],
  exports: [
    CreateExamRoutingModule
  ]
})
export class CreateExamModule { }
