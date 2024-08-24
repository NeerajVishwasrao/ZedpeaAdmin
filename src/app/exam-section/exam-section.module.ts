import { NgModule } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

import { ExamSectionRoutingModule } from './exam-section-routing.module';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ExamSectionRoutingModule,
  ],
  exports:[
    ExamSectionRoutingModule,
  ]
})
export class ExamSectionModule { }
