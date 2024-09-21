import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ServiceExamSectionService } from '../../service/service-exam-section.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-show-created-test',
  standalone: true,
  imports: [RouterLink, NgFor,NgIf],
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

  addexamdisable: any;
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

  Showsingletest(exam: any) {
    this.router.navigateByUrl("Show-single-exam");
    this.serviceExamSection.sendOnetest(exam);

  }

  index: number = 1
  examsList: any[] = []
  router = inject(Router);
  serviceExamSection = inject(ServiceExamSectionService);

  leagueUser: user =
    {
      leagueId: "101"
    }

  ngOnInit(): void {

    let objUprofile = localStorage.getItem("uprofile");
    if (objUprofile != null) {
      this.leagueUser.leagueId = JSON.parse(objUprofile)['league_id'];
    }

    this.serviceExamSection.getallexmass(this.leagueUser).subscribe(
      (data: any[]) => {
        this.examsList;
        // = data
      }
    )

  }


  incrementIndex() {
    return this.index++
  }
}

interface user {
  leagueId: string
}
