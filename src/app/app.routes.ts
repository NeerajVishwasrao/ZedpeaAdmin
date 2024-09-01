import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { authZPGuard } from './auth-zp.guard';
import { CreateStudentComponent } from './create-classroom/create-student.component';

export const routes: Routes = [

    {
       path:'exam-section',loadChildren:()=>import('./exam-section/exam-section.module').then(m=>m.ExamSectionModule) ,
       canActivate:[authZPGuard]
    }
    ,
    {
        path:'',component:LoginComponent,
    },

    {
         path: 'student', component: CreateStudentComponent ,
    }
    
   
];
