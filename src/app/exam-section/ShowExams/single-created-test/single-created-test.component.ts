import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ServiceExamSectionService } from '../../../service/service-exam-section.service';

@Component({
  selector: 'app-created-test',
  standalone: true,
  imports: [NgFor,],
  templateUrl: './single-created-test.component.html',
  styleUrl: './single-created-test.component.css'
})

export class CreatedTestComponent {
  router=inject(Router)
  Service=inject(ServiceExamSectionService)

goback() {
  this.router.navigateByUrl("Exam-Center/ShowExam")
}
   question:any
  examsectionservice=inject(ServiceExamSectionService)

ngOnInit(){
  this.examsectionservice.returnShowonetest().subscribe((val)=>{
     this.question=val
     console.log("shwosdfsssssssssss  "+val)
  })

}
}
