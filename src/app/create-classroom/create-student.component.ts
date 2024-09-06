import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceExamSectionService } from '../service/service-exam-section.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { studentdata } from './studentdata.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-student',
  standalone: true,
  imports: [NgFor, NgIf,FormsModule],
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {

Goto_AddStudent() {
throw new Error('Method not implemented.');
}

Goto_Students() {
  this.router.navigateByUrl("creteclassroom")
}

Goto_Exmas() {
  this.router.navigateByUrl("exam-section/showcreatedtests")

this.serviceExamSection.Add_this_Q(this.CQArray)}

disstudents: boolean=true;

addexamdisable: any;
disexam: any;
CQArray: any;
Goto_AddExams() {
  this.router.navigateByUrl("exam-section/create-exam")
}

Studentdata:any;

  isnewstudent: boolean = false; 

  searchtext: any = '';
  searchtext1: string = '';
  searchtext2: string = '';
  searchtext3: string = '';
  searchtext4: string = '';
 

 user: any = '';
studentName: any;
rollNo: any;

 


  selectedStudents: any[] = [];
  savedStudentGroups: any[][] = [];

  router = inject(Router);
  serviceExamSection = inject(ServiceExamSectionService);
  http = inject(HttpClient);

  varr: any[] = [];

  getstuobj:demoobj=

  {
    leagueId: "101"
 }


  ngOnInit(): void {
   this.http.post<any>('https://zedpea.co.in/api/students.php',this.getstuobj)
    .subscribe(
      (data: any) => {
        this.varr = data; 

      

      }
    );


    if (localStorage.getItem("uprofile") != null) {
      this.user = localStorage.getItem("uprofile");
    }
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


  StudentName:string='';
  StudentRoll:number=0;
  StudentSelect:string='';
  Susername:string='';
  Spassword:string='';

  saveSelectedStudents() {
    // if (this.selectedStudents.length > 0) {
    //   this.savedStudentGroups.push([...this.selectedStudents]);  
    //   this.selectedStudents = []; 
    //   console.log("Selected students :", this.savedStudentGroups);
    // }


    console.log("Form Submited : ",this.StudentName,this.StudentRoll,this.StudentSelect,this. Susername,this.Spassword);
       this.StudentSelect='';
       this.StudentName='';
       this. Susername='';
       this.StudentRoll;
       this.Spassword='';
  }



  
}

  interface demoobj{
    leagueId:string
 }