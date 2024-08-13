import { Routes } from '@angular/router';

export const routes: Routes = [


    {
       path:'exam-section',loadChildren:()=>import('./exam-section/exam-section.module').then(m=>m.ExamSectionModule) 
    }
    
];
