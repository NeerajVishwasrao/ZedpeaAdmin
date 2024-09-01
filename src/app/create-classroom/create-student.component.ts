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
}
