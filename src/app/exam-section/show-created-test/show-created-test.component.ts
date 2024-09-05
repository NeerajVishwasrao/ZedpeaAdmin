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
addexamdisable: any;
CQArray: any;
user: any;
disexam: boolean=true;
Goto_AddExams() {
  this.router.navigateByUrl("exam-section/create-exam")}
Goto_Students() {
this.router.navigateByUrl("creteclassroom")}
  index: number = 1
  Qcontainer: any
  router=inject(Router);
  serviceExamSection = inject(ServiceExamSectionService);
  ngOnInit() {
    this.Qcontainer = this.serviceExamSection.QarrayContainer
  }
  incrementIndex(){
    return this.index++
  }
}
