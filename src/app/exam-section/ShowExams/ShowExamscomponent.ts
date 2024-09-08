import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ServiceExamSectionService } from '../../service/service-exam-section.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-show-created-test',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './ShowExams.component.html',
  styleUrl: './ShowExams.component.css'
})
export class ShowCreatedTestComponent {
deleteTest(_t36: any) {
throw new Error('Method not implemented.');
}
shareTest(_t36: any) {
throw new Error('Method not implemented.');
}
editTest(_t36: any) {
throw new Error('Method not implemented.');
}
Showsingletest(exam:any) {
this.router.navigateByUrl("Show-single-exam");
this.serviceExamSection.sendOnetest(exam);

}
 
  addexamdisable: any;
  CQArray: any;
  user: string="Tejas";
  disexam: boolean = true;
  goto_AddExams() {
    this.router.navigateByUrl("Exam-Center/AddExam")
  }

  goto_AddStudent() {
    this.router.navigateByUrl("Add-Student")
  }

  goto_Students() {
    this.router.navigateByUrl("Show-Student")
  }
  index: number = 1
  Qcontainer: any[] = []
  router = inject(Router);
  serviceExamSection = inject(ServiceExamSectionService);


  ngOnInit() {
    this.serviceExamSection.getallexmas().subscribe(
      (val) => {
        this.Qcontainer = val
        console.log("here is array or array all tests "+this.Qcontainer)
      }
    )

    // let objUprofile = localStorage.getItem("uprofile");
    // if (objUprofile != null) {
    //   this.user = JSON.parse(objUprofile)['league_name'];
    // }
  }


  incrementIndex() {
    return this.index++
  }
}
