import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceExamSectionService } from '../service/service-exam-section.service';

@Component({
  selector: 'app-create-student',
  standalone: true,
  imports: [],
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.css'
})
export class CreateStudentComponent {
  databasename: any;

  // router = inject(Router)
  // serviveExamSection = inject(ServiceExamSectionService)
  
  
//   constructor(private serviveExamSection: ServiceExamSectionService,private router:Router) {}

//   ngOnInit(): void {
//     this.serviveExamSection.get_student_data().subscribe(
//       (data) => {
//         this.databasename = data; 
        
//       }
//     );
// }
}