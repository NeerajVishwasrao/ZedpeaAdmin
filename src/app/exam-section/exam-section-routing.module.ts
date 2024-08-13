import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamSectionComponent } from './exam-section.component';

const routes: Routes = [

  {
    path: '', component: ExamSectionComponent,
    children: [
      { path: "analysis_performance", loadChildren: () => import('./annalysis-performance/analysis-performance.module').then(m => m.AnalysisPerformanceModule) },
      { path: "create-exam", loadChildren: () => import('./create-exam/create-exam.module').then(m => m.CreateExamModule) },
      { path: "showcreatedtests", loadChildren: () => import('./show-created-test/showcrt-routing-module.module').then(m => m.ShowcrtRoutingModuleModule) }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamSectionRoutingModule { }
