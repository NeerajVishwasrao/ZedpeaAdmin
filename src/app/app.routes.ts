import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { authZPGuard } from './auth-zp.guard';
import { CreateStudentComponent } from './create-classroom/create-student.component';
import { ShowStudentsComponent } from './create-classroom/show-students/show-students.component';

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
        path:'creteclassroom',loadChildren:()=>import('./create-classroom/create-classroom.module').then(m=>m.CreateClassroomModule),
        canActivate:[authZPGuard]
    },
    {
        path:'showstudent',component:ShowStudentsComponent
    }
   
];
