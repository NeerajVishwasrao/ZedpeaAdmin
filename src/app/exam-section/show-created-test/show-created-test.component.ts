import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ServiceExamSectionService } from '../../service/service-exam-section.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-show-created-test',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './show-created-test.component.html',
  styleUrl: './show-created-test.component.css'
})
export class ShowCreatedTestComponent {
senddata(_t32: any) {
throw new Error('Method not implemented.');
}
addexamdisable: any;
CQArray: any;
user: any;
disexam: boolean=true;
Goto_AddExams() {
  this.router.navigateByUrl("exam-section/create-exam")}

  Goto_AddStudent() {
    throw new Error('Method not implemented.');
    }
    
Goto_Students() {
this.router.navigateByUrl("creteclassroom")}
  index: number = 1
  Qcontainer: any[]=[]
  router=inject(Router);
  serviceExamSection = inject(ServiceExamSectionService);
  ngOnInit() {
    this.serviceExamSection.getallexmas().subscribe(
      (val)=>{
        this.Qcontainer =val
      }
    )
  }
  incrementIndex(){
    return this.index++
  }
}
