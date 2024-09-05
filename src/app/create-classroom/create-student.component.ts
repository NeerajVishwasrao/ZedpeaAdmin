import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceExamSectionService } from '../service/service-exam-section.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  standalone: true,
  imports: [NgFor, NgIf,FormsModule],
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
Goto_Exmas() {
  this.router.navigateByUrl("exam-section/showcreatedtests")}

disstudents: boolean=true;

addexamdisable: any;
disexam: any;
CQArray: any;
Goto_AddExams() {
  this.router.navigateByUrl("exam-section/create-exams")
}

  searchtext: any = '';
  searchtext1: string = '';
  searchtext2: string = '';
  searchtext3: string = '';
  searchtext4: string = '';
  isnewstudent: string = '';

user: any;
studentName: any;
rollNo: any;
 


  selectedStudents: any[] = [];
  savedStudentGroups: any[][] = [];

  router = inject(Router);
  serviceExamSection = inject(ServiceExamSectionService);
  varr: any[] = [];
 


  ngOnInit(): void {
    this.serviceExamSection.get_student_data().subscribe(
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

  saveSelectedStudents() {
    if (this.selectedStudents.length > 0) {
      this.savedStudentGroups.push([...this.selectedStudents]);  
      this.selectedStudents = []; 
      console.log("Selected students :", this.savedStudentGroups);
    }
  }




  
}
