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
    Picture: new FormControl("", [Validators.required, this.pictureValidator ])
  });



  img_validation_msg: string = '';
  isValidUpload: boolean = false
  event: any = ''
  

  pictureValidator(control: FormControl): { [key: string]: any } | null {
  const file = control.value;

  if (!file) return null;

  const validFileType = file.type === "image/jpeg" || file.type === "image/png";
  if (!validFileType) {
    return { invalidFileType: true }; 
  }

  const maxSize = 1000000; // 1 MB
  if (file.size > maxSize) {
    return { invalidFileSize: true }; 
  }

  return null;
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


  ngOnInit(): void {
    console.log("Lazy loaded add student")

    let objUprofile = localStorage.getItem("uprofile");
    if (objUprofile != null) {
      this.newStudent.leagueId = JSON.parse(objUprofile)['league_id'];
    }
  }
  iscorrect: Boolean = false


  saveSelectedStudents() {
    let objUprofile = localStorage.getItem("uprofile");
    if (this.studentForm.valid) {
      this.newStudent.studentId = this.studentForm.get('RollNumber')?.value;
      this.newStudent.studentName = this.studentForm.get('StudentName')?.value;
      this.newStudent.grade = this.studentForm.get('SelectGrade')?.value;
      this.newStudent.username = this.studentForm.get('Username')?.value;
      this.newStudent.passkey = this.studentForm.get('Password')?.value;
      if (objUprofile != null) {
        this.newStudent.leagueId = JSON.parse(objUprofile)['league_id'];
      }

      this.http.post<any>('https://zedpea.co.in/api/newstudent.php', this.newStudent)
        .subscribe(data => {
          this.message = data.message;
          this.iscorrect = true
          this.ValidationResult = "Data Inserted Successfully ";
        }
        );
    }
    else {
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
