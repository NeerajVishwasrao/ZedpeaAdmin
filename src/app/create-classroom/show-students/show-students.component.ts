import { Component, inject } from '@angular/core';
import { ServiceExamSectionService } from '../../service/service-exam-section.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-show-students',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './show-students.component.html',
  styleUrl: './show-students.component.css'
})
export class ShowStudentsComponent {

openForm() {
throw new Error('Method not implemented.');
}


  goto_AddStudent() {
    this.router.navigateByUrl("Add-Student")

  }
  goto_AddExams() {
    this.router.navigateByUrl("Exam-Center/AddExam")
  }

  goto_Exmas() {
    this.router.navigateByUrl("Exam-Center/ShowExam")

  }

  disstudents: boolean = true;

  addexamdisable: any;
  disexam: any;
  CQArray: any;

  Studentdata: any;

  isnewstudent: boolean = false;

  searchtext: any = '';
  searchtext1: string = '';
  searchtext2: string = '';
  searchtext3: string = '';
  searchtext4: string = '';

  studentName: any;
  rollNo: any;

  selectedStudents: any[] = [];
  savedStudentGroups: any[][] = [];

  router = inject(Router);
  serviceExamSection = inject(ServiceExamSectionService);
  http = inject(HttpClient);

  varr: any[] = [];

  leagueUser: user =
    {
      leagueId: "101"
    }


  ngOnInit(): void {
    
    // let objUprofile = localStorage.getItem("uprofile");
    // if (objUprofile != null) {
    //   // this.leagueUser.leagueId = JSON.parse(objUprofile)['league_id'];
    // }

    this.http.post<any>('https://zedpea.co.in/api/students.php', this.leagueUser)
      .subscribe(
        (data: any) => {
          this.varr = data;
        }
      );
  }

  filterQuestions() {

    this.varr = this.varr.filter(student => {
      return (
        (this.studentName ? student.name.toLowerCase().includes(this.studentName.toLowerCase()) : true) &&
        (this.rollNo ? student.rollno.includes(this.rollNo) : true) &&
        (this.searchtext1 ? student.std === this.searchtext1 : true)
      );
    });
  }



  Add_this_Student(studentId: any) {
    const selectedStudent = this.varr.find(student => student.id === studentId);
    if (selectedStudent) {
      this.selectedStudents.push(selectedStudent);
    }
    console.log("add student method calling")
  }


  StudentName: string = '';
  StudentRoll: number = 0;
  StudentSelect: string = '';
  Susername: string = '';
  Spassword: string = '';

  saveSelectedStudents() {
    // if (this.selectedStudents.length > 0) {
    //   this.savedStudentGroups.push([...this.selectedStudents]);  
    //   this.selectedStudents = []; 
    //   console.log("Selected students :", this.savedStudentGroups);
    // }


    console.log("Form Submited : ", this.StudentName, this.StudentRoll, this.StudentSelect, this.Susername, this.Spassword);
    this.StudentSelect = '';
    this.StudentName = '';
    this.Susername = '';
    this.StudentRoll;
    this.Spassword = '';
  }




}

interface user {
  leagueId: string
}



