import { Component, inject } from '@angular/core';
import { ServiceExamSectionService } from '../../service/service-exam-section.service';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { LoaderComponent } from '../../Reusable-view/loader/loader.component';
import { MenuButtonsComponent } from '../../Reusable-view/menu-buttons/menu-buttons.component';

@Component({
  selector: 'app-show-students',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, RouterLink, LoaderComponent, MenuButtonsComponent, TitleCasePipe],
  templateUrl: './show-students.component.html',
  styleUrl: './show-students.component.css'
})

export class ShowStudentsComponent {

  img_validation_msg: string = '';
  isValidUpload: boolean = false
  event: any = ''
  exam: any;

  uploadValidPic(event: any) {
    if (event.target.files.length > 0) {
      const file: File = event.target.files[0];
      debugger
      if (file.size > 1000000) {
        this.img_validation_msg = "Not accepted Size should less than 1 MB"
      }
      else {
        if (file.type == "image/jpeg" || file.type == "image/png") {
          const formdata = new FormData();
          formdata.append('file', file);

          console.log(formdata)
          this.img_validation_msg = ""
          this.isValidUpload = true
        } else {
          this.img_validation_msg = " WRONG FILE !! Format should in JEPG or PNG"
        }
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


  selectedStudent: any;
  isLoaderActive: Boolean = true;

  editStudent(student: any) {

    this.selectedStudent = student;
  }



  openForm() {
    throw new Error('Method not implemented.');
  }


  disstudents: boolean = true;
  addexamdisable: any;
  disexam: any;

  Studentdata: any;

  serviceExamSection = inject(ServiceExamSectionService);


  studentList: any[] = [];

  leagueUser: user =
    {
      leagueId: "101"
    }


  ngOnInit(): void {
    console.log("Lazy loaded show student")

    let objUprofile = localStorage.getItem("uprofile");
    if (objUprofile != null) {
      this.leagueUser.leagueId = JSON.parse(objUprofile)['league_id'];
    }

    this.http.post<any>('https://zedpea.co.in/api/students.php', this.leagueUser)
      .subscribe(
        (data: any) => {
          this.studentList = data;
          this.isLoaderActive = false
        }
      );
  }

}

interface user {
  leagueId: string
}

interface StudentObj {
  studentId: string,
  studentName: string,
  grade: string,
  username: string,
  passkey: string,
  leagueId: string
}


