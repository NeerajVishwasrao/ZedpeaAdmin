import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-student',
  standalone: true,
  imports: [NgFor, NgIf,FormsModule],
  templateUrl: './Add-Student.component.html',
  styleUrls: ['./Add-Student.component.css']
})

export class CreateStudentComponent {
  router = inject(Router);
  http = inject(HttpClient);

  Goto_Students() {
    this.router.navigateByUrl("Show-Student")
  }

  Goto_Exmas() {
    this.router.navigateByUrl("Exam-Center/ShowExam")
  }

  Goto_AddExams() {
    this.router.navigateByUrl("Exam-Center/AddExam")
  }
  
  isnewstudent: boolean = false;
  message: any = 'Save';
  newStudent: StudentObj =
  {
    "studentId": '',
    "studentName": '',
    "grade": '',
    "username": '',
    "passkey": '',
    "leagueId": '101'
  }

  ngOnInit(): void {
    let objUprofile = localStorage.getItem("uprofile");
    if (objUprofile != null) {
      this.newStudent.leagueId = JSON.parse(objUprofile)['league_id'];
    }
  }

  saveSelectedStudents() {
    this.http.post<any>('https://zedpea.co.in/api/newstudent.php', this.newStudent)
    .subscribe( data => {
        this.message = data.message; 
      }
    );
  }
}

interface StudentObj {
  "studentId": string,
  "studentName": string,
  "grade": string,
  "username": string,
  "passkey": string,
  "leagueId": string
}
  