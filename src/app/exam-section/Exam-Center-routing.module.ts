import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamSectionComponent } from './Exam-Center.component';
import { CreateStudentComponent } from '../create-classroom/Add-Students/Add-Student.component';

const routes: Routes = [

  {
    path: '', component: ExamSectionComponent,
    children: [
      { path: "analysis_performance", loadChildren: () => import('./analysis-performance/analysis-performance.module').then(m => m.AnalysisPerformanceModule) },
      { path: "AddExam", loadChildren: () => import('./AddExam/AddExam.module').then(m => m.CreateExamModule) },
      { path: "ShowExam", loadChildren: () => import('./ShowExams/ShowExams.module').then(m => m.ShowcrtRoutingModuleModule) },
      { path: "Show-single-exam",loadChildren:() => import('./ShowExams/single-created-test/single-creted-test.module').then(m => m.CretedTestModule) } 
      
    ]
  },

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamSectionRoutingModule { }
