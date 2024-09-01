import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceExamSectionService } from '../service/service-exam-section.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-create-student',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {

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
