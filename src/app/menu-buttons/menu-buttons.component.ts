import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-buttons',
  standalone: true,
  imports: [],
  templateUrl: './menu-buttons.component.html',
  styleUrl: './menu-buttons.component.css'
})
export class MenuButtonsComponent {

router=inject(Router);

Goto_AddExmas() {
throw new Error('Method not implemented.');
}
Goto_AddStudents() {
throw new Error('Method not implemented.');
}
@Input() Show_btn_All_Stu: boolean=false;
@Input() Show_btn_addStu: boolean=false;
@Input() Show_btn_AllExams: boolean=false;
@Input() Show_btn_AddExam: boolean=false;
Goto_Exmas() {
  this.router.navigateByUrl("Exam-Center/ShowExam")
}
Goto_Students() {
  this.router.navigateByUrl("Show-Student")
}

}
