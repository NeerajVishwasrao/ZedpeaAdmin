import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-student',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, NgClass],
  templateUrl: './Add-Student.component.html',
  styleUrls: ['./Add-Student.component.css']
})

export class CreateStudentComponent {
  router = inject(Router);
  http = inject(HttpClient);
  ValidationResult: string = '';

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
      studentId: '',
      studentName: '',
      grade: '',
      username: '',
      passkey: '',
      leagueId: '101'
    }

  nameValidationMessage: string = '';
  usernameValidationMessage: string = '';
  passwordValidationMessage: string = '';

  validateUsername(): boolean {
    if (!this.newStudent.username) {
      this.usernameValidationMessage = 'Username is required';
      return false;

    } else if (this.newStudent.username.length < 4) {
      this.usernameValidationMessage = 'Username must be at least 4 characters long';
      return false;

    } else {
      this.usernameValidationMessage = '';
      return true

    }
  }

  validatePassword(): boolean {
    if (!this.newStudent.passkey) {
      this.passwordValidationMessage = 'Password is required';
      return false;

    } else if (this.newStudent.passkey.length < 6) {
      this.passwordValidationMessage = 'Password must be at least 6 characters long';
      return false;

    } else if (!/\d/.test(this.newStudent.passkey) || !/[!@#$%^&*]/.test(this.newStudent.passkey)) {
      this.passwordValidationMessage = 'Password must contain at least one number and one special character';
      return false;

    } else {
      this.passwordValidationMessage = '';
      return true

    }
  }

  validateStudentName(): boolean {
    const firstChar = this.newStudent.studentName.charAt(0);
    if (!/^[a-zA-Z]/.test(firstChar)) {
      this.nameValidationMessage = 'The name must start with an alphabet!';
      return false
    } else {
      this.nameValidationMessage = '';
      return true
    }
  }

  selectedGrade: string = '';
  gradeValidationMessage: string = '';


  validateGrade(): boolean {
    if (!this.newStudent.grade) {
      this.gradeValidationMessage = 'Grade is required';
      return false;
    } else {
      this.gradeValidationMessage = '';
      return true;
    }
  }

  ngOnInit(): void {
    let objUprofile = localStorage.getItem("uprofile");
    if (objUprofile != null) {
      this.newStudent.leagueId = JSON.parse(objUprofile)['league_id'];
    }
  }
  iscorrect: Boolean = false

  saveSelectedStudents() {



    if (this.validateStudentName() && this.validateGrade() && this.validateUsername() && this.validatePassword()) {
      this.http.post<any>('https://zedpea.co.in/api/newstudent.php', this.newStudent)
        .subscribe(data => {
          this.message = data.message;
          this.iscorrect = true
          this.ValidationResult = "Data Inserted Successfully ";

        }
        );
    }
    else {
      console.log("else")
      this.ValidationResult = "Something Wrong";
      this.iscorrect = false
    }


  }
}

interface StudentObj {
  studentId: string,
  studentName: string,
  grade: string,
  username: string,
  passkey: string,
  leagueId: string
}
