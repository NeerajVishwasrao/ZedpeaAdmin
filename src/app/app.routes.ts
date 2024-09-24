import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { authZPGuard } from './auth-zp.guard';
import { CreateStudentComponent } from './create-classroom/Add-Students/Add-Student.component';
import { ShowStudentsComponent } from './create-classroom/show-students/show-students.component';

export const routes: Routes = [

    {
       path:'Exam-Center',loadChildren:()=>import('./exam-section/Exam-Center.module').then(m=>m.ExamSectionModule) ,
       canActivate:[authZPGuard]
    }
    ,
    {
        path:'',component:LoginComponent,
    },

    {
        path:'Add-Student',loadChildren:()=>import('./create-classroom/Add-Students/Add-Student.module').then(m=>m.CreateClassroomModule),
        canActivate:[authZPGuard]
    },
    {
        path:'Show-Student',loadChildren:()=>import('./create-classroom/show-students/show-student.module').then(m=>m.ShowStudentModule),
        canActivate:[authZPGuard]
    },
   
];
