import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalysisPerformanceRoutingModule } from './analysis-performance-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AnalysisPerformanceRoutingModule
  ],
  exports:[
    AnalysisPerformanceRoutingModule,
    
  ]
})
export class AnalysisPerformanceModule { }
