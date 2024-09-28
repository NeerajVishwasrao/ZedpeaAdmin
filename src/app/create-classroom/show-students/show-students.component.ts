import { Component, inject } from '@angular/core';
import { ServiceExamSectionService } from '../../service/service-exam-section.service';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass, NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { LoaderComponent } from '../../Reusable-view/loader/loader.component';
import { MenuButtonsComponent } from '../../Reusable-view/menu-buttons/menu-buttons.component';

@Component({
  selector: 'app-show-students',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, NgClass, RouterLink, LoaderComponent, MenuButtonsComponent, TitleCasePipe, ReactiveFormsModule],
  templateUrl: './show-students.component.html',
  styleUrl: './show-students.component.css'
})

export class ShowStudentsComponent {
saveStudent() {
throw new Error('Method not implemented.');
}

  studentForm: FormGroup = new FormGroup({
    StudentName: new FormControl("", [Validators.required, Validators.pattern(/^[a-z A-Z]+$/)]),
    RollNumber: new FormControl("", [Validators.required]),
    SelectGrade: new FormControl("", [Validators.required]),
    Username: new FormControl("", [Validators.required, Validators.minLength(6)]),
    Password: new FormControl("", [Validators.required, Validators.minLength(6), Validators.pattern(/[!@#$%^&*]/)]),
    Picture: new FormControl("", [Validators.required,])
  });

  img_validation_msg: string = '';
  isValidUpload: boolean = false
  event: any = ''
  exam: any;


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

  isLoaderActive: Boolean = true;

  selectedStudent: any;
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


