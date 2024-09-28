import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ServiceExamSectionService } from '../../service/service-exam-section.service';
import { NgFor, NgIf } from '@angular/common';
import { LoaderComponent } from '../../Reusable-view/loader/loader.component';
import { MenuButtonsComponent } from '../../Reusable-view/menu-buttons/menu-buttons.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-show-created-test',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf, LoaderComponent, MenuButtonsComponent,ReactiveFormsModule],
  templateUrl: './ShowExams.component.html',
  styleUrl: './ShowExams.component.css'
})
export class ShowCreatedTestComponent {
saveTest() {
throw new Error('Method not implemented.');
}

  TestForm: FormGroup = new FormGroup({
    TestName: new FormControl("", [Validators.required]),
    TestDescription: new FormControl("", [Validators.required]),
   
  });

  EditExamForm = {
    examname: ''
  };


  selectedExam: any;
  isLoaderActive: Boolean = true;

  editTest(exam: any) {
   
    this.selectedExam = exam;
  }
 
  deleteTest(_t36: any) {
    throw new Error('Method not implemented.');
  }
  shareTest(_t36: any) {
    throw new Error('Method not implemented.');
  }

  addexamdisable: any;
  disexam: boolean = true;


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
    console.log("Lazy loaded add exam")

    let objUprofile = localStorage.getItem("uprofile");
    if (objUprofile != null) {
      this.leagueUser.leagueId = JSON.parse(objUprofile)['league_id'];
    }

    this.serviceExamSection.getallexmass(this.leagueUser).subscribe(
      (data: any[]) => {
        this.examsList = data
        this.isLoaderActive = false
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
