import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnalysisPerformanceComponent } from './annalysis-performance.component';

const routes: Routes = [
  {  path:"",component:AnnalysisPerformanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalysisPerformanceRoutingModule { }
