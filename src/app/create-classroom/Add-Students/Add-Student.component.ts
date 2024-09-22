import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MenuButtonsComponent } from '../../Reusable-view/menu-buttons/menu-buttons.component';

@Component({
  selector: 'app-create-student',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, NgClass, MenuButtonsComponent],
  templateUrl: './Add-Student.component.html',
  styleUrls: ['./Add-Student.component.css']
})

export class CreateStudentComponent {

  img_validation_msg: string = '';
  isValidUpload: boolean = false
  event: any = ''

  uploadValidPic(event: any) {
    if (event.target.files.length > 0) {
      const file: File = event.target.files[0];

      if (file.type == "image/jpeg" || file.type == "image/png") {
        const formdata = new FormData();
        formdata.append('file', file);

        console.log(formdata)
        this.img_validation_msg = ""
        this.isValidUpload = true
      } else {
        this.img_validation_msg = " WRONG FILE !! Format should in JEPG or PNG"
      }

      // debugger;
    } else {
      this.img_validation_msg = "Select picture of Student"
    }

  }

  router = inject(Router);
  http = inject(HttpClient);
  ValidationResult: string = '';


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

    } else if (!/\d/.test(this.newStudent.passkey) || ! /[!@#$%^&*]/.test(this.newStudent.passkey)) {
      this.passwordValidationMessage = 'Password must contain at least one number and one special character';
      return false;

    } else {
      this.passwordValidationMessage = '';
      return true

    }
  }
  // ^ for starting , +$ for ending  this cheaks starting and ending char with [a-zA-Z] characters
  validateStudentName(): boolean {
    if (! /^[a-z A-Z]+$/.test(this.newStudent.studentName)) {
      this.nameValidationMessage = 'The name must contain alphabets!';
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

    if (this.validateStudentName() && this.validateGrade() && this.validateUsername() && this.validatePassword() && this.isValidUpload) {

      this.isValidUpload = false;
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
      if (this.isValidUpload == false) {
        this.img_validation_msg = "Please select the student pic"
      }
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
