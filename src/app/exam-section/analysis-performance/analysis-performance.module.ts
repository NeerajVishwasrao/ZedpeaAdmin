import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalysisPerformanceRoutingModule } from './analysis-performance-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AnalysisPerformanceRoutingModule
  ],
  exports:[
    AnalysisPerformanceRoutingModule
  ]
})
export class AnalysisPerformanceModule { }
