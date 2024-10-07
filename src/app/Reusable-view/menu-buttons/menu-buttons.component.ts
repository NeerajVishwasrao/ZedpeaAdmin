import { NgClass, NgIf } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-buttons',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './menu-buttons.component.html',
  styleUrl: './menu-buttons.component.css'
})
export class MenuButtonsComponent {

  router = inject(Router);

  @Input() Show_btn_All_Stu: boolean = false;
  @Input() Show_btn_addStu: boolean = false;
  @Input() Show_btn_AllExams: boolean = false;
  @Input() Show_btn_AddExam: boolean = false;

  Goto_AddExmas() {
    this.Show_btn_All_Stu = false
    this.Show_btn_addStu = false
    this.Show_btn_AllExams = false
    this.Show_btn_AddExam = true

    this.router.navigateByUrl("Exam-Center/AddExam")
  }

  Goto_AddStudents() {
    this.Show_btn_All_Stu = false
    this.Show_btn_addStu = true
    this.Show_btn_AllExams = false
    this.Show_btn_AddExam = false

    this.router.navigateByUrl("Add-Student")
  }

  Goto_Exmas() {
    this.Show_btn_All_Stu = false
    this.Show_btn_addStu = false
    this.Show_btn_AllExams = true
    this.Show_btn_AddExam = false

    this.router.navigateByUrl("Exam-Center/ShowExam")
  }
  
  Goto_Students() {
    this.Show_btn_All_Stu = true
    this.Show_btn_addStu = false
    this.Show_btn_AllExams = false
    this.Show_btn_AddExam = false

    this.router.navigateByUrl("Show-Student")
  }

}
