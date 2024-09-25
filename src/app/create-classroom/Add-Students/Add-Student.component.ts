import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { JsonPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MenuButtonsComponent } from '../../Reusable-view/menu-buttons/menu-buttons.component';

@Component({
  selector: 'app-create-student',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, NgClass, MenuButtonsComponent, ReactiveFormsModule, JsonPipe],
  templateUrl: './Add-Student.component.html',
  styleUrls: ['./Add-Student.component.css']
})

export class CreateStudentComponent {

  studentForm: FormGroup = new FormGroup({
    StudentName: new FormControl("", [Validators.required, Validators.pattern(/^[a-z A-Z]+$/)]),
    RollNumber: new FormControl("", [Validators.required]),
    SelectGrade: new FormControl("", [Validators.required]),
    Username: new FormControl("", [Validators.required, Validators.minLength(6)]),
    Password: new FormControl("", [Validators.required, Validators.minLength(6), Validators.pattern(/[!@#$%^&*]/)]),
    // Picture: new FormControl("", [Validators.required])
  });



  img_validation_msg: string = '';
  isValidUpload: boolean = false
  event: any = ''

  uploadValidPic(event: any) {
    if (event.target.files.length > 0) {
      const file: File = event.target.files[0];
      debugger
      if (file.size > 1000000) {
        this.img_validation_msg = "Not accepted Size should less than 1 MB"
      } else {
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

  ngOnInit(): void {
    console.log("Lazy loaded add student")

    let objUprofile = localStorage.getItem("uprofile");
    if (objUprofile != null) {
      this.newStudent.leagueId = JSON.parse(objUprofile)['league_id'];
    }
  }
  iscorrect: Boolean = false


  saveSelectedStudents() {
    if (this.studentForm.valid) {

      this.newStudent.studentId = this.studentForm.get('RollNumber')?.value;
      this.newStudent.studentName = this.studentForm.get('StudentName')?.value;
      this.newStudent.grade = this.studentForm.get('SelectGrade')?.value;
      this.newStudent.username = this.studentForm.get('Username')?.value;
      this.newStudent.passkey = this.studentForm.get('Password')?.value;
      this.newStudent.leagueId = '101';

      this.http.post<any>('https://zedpea.co.in/api/newstudent.php', this.newStudent)
        .subscribe(data => {
          this.message = data.message;
          this.iscorrect = true
          this.ValidationResult = "Data Inserted Successfully ";

        }
        );
      debugger
    }
    else {
      console.log("else")
      this.ValidationResult = "Something Wrong";
      this.iscorrect = false
      debugger
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
