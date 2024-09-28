import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ServiceExamSectionService } from '../../service/service-exam-section.service';
import { NgFor, NgIf } from '@angular/common';
import { LoaderComponent } from '../../Reusable-view/loader/loader.component';
import { MenuButtonsComponent } from '../../Reusable-view/menu-buttons/menu-buttons.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FireNewExam, FireNewQuiz } from '../../service/exams.model';
import { FireQset, FireQuestion } from '../../service/questions.model';

@Component({
  selector: 'app-show-created-test',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf, LoaderComponent, MenuButtonsComponent, ReactiveFormsModule],
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

  leagueUser: user =
    {
      leagueId: "101"
    }

  quizObj: FireNewQuiz =
    {
      "pid": "112",
      "pname": "mt112",
      "desc": " Maths 1",
      "grade": "K1",
      "img": "images/numbers.png",
      "mentor": "Kalpi",
      "status": "Start",
      "subject": "Maths"
    }
  quiz: FireNewExam =
    {
      "leagueid": "kalpi",
      "grade": "k1",
      "newquiz": this.quizObj
    };

  sharingTest: any = {
    "userid": "s111",
    "pid": "mr111",
    "date": "29072024",
    "status": "Start",
    "qset": [
      {
        "sessionid": "ub01",
        "status": "alert-dark"
      },
      {
        "sessionid": "ub02",
        "status": "alert-dark"
      },
      {
        "sessionid": "ub03",
        "status": "alert-dark"
      },
      {
        "sessionid": "ub04",
        "status": "alert-dark"
      },
      {
        "sessionid": "ub05",
        "status": "alert-dark"
      },
      {
        "sessionid": "ub06",
        "status": "alert-dark"
      },
      {
        "sessionid": "ub07",
        "status": "alert-dark"
      },
      {
        "sessionid": "ub08",
        "status": "alert-dark"
      },
      {
        "sessionid": "ub09",
        "status": "alert-dark"
      },
      {
        "sessionid": "ub10",
        "status": "alert-dark"
      }
    ]
  }

  testnameValidationMessage: any;

  validTestName() {
    if (!this.EditExamForm.examname || this.EditExamForm.examname.trim() === '') {
      this.testnameValidationMessage = 'Test Name is required.';
    } else {
      this.testnameValidationMessage = '';
    }
  }

  selectedExam: any;
  isLoaderActive: Boolean = true;

  editTest(exam: any) {

    this.selectedExam = exam;
  }

  deleteTest(_t36: any) {
    throw new Error('Method not implemented.');
  }

  shareTest(selectedExam: any) {

    this.sharingTest = {
      "userid": "s111",
      "pid": selectedExam.practid,
      "date": "29072024",
      "status": "Start",
      "qset": [
        {
          "sessionid": selectedExam.q1,
          "status": "alert-dark"
        },
        {
          "sessionid": selectedExam.q2,
          "status": "alert-dark"
        },
        {
          "sessionid": selectedExam.q3,
          "status": "alert-dark"
        },
        {
          "sessionid": selectedExam.q4,
          "status": "alert-dark"
        },
        {
          "sessionid": selectedExam.q5,
          "status": "alert-dark"
        },
        {
          "sessionid": selectedExam.q6,
          "status": "alert-dark"
        },
        {
          "sessionid": selectedExam.q7,
          "status": "alert-dark"
        },
        {
          "sessionid": selectedExam.q8,
          "status": "alert-dark"
        },
        {
          "sessionid": selectedExam.q9,
          "status": "alert-dark"
        },
        {
          "sessionid": selectedExam.q10,
          "status": "alert-dark"
        }
      ]
    }

    this.serviceExamSection.addexamq(this.sharingTest).subscribe(
      (data: any) => {
        this.message = data;
      }
    )

  }

  launchTest(selectedExam: any, ei: any) {

    this.quizObj = {
      "pid": selectedExam.practid,
      "pname": selectedExam.pname,
      "desc": selectedExam.pdesc,
      "grade": selectedExam.grade,
      "img": "images/numbers.png",
      "mentor": this.uprofile['league_name'],
      "status": "Start",
      "subject": ""
    }
    this.quiz =
    {
      "leagueid": this.uprofile['league_id'],
      "grade": this.quizObj.grade.toLowerCase(),
      "newquiz": this.quizObj
    };

    this.examsList[ei].shared = -1;

    this.serviceExamSection.addassignment(this.quiz).subscribe(
      (data: any) => {
        this.message = data;
      }
    )

    this.serviceExamSection.shareCounter(selectedExam.practid).subscribe(
      (data: any) => {
        this.message = data;
        this.examsList[ei].shared = 1;
      }
    )

  }

  addexamdisable: any;
  disexam: boolean = true;


  Showsingletest(exam: any) {
    this.router.navigateByUrl("Show-single-exam");
    this.serviceExamSection.sendOnetest(exam);

  }

  index: number = 1;
  message: string = "";
  examsList: any[] = [];
  router = inject(Router);
  serviceExamSection = inject(ServiceExamSectionService);

  uprofile: any;

  ngOnInit(): void {
    console.log("Lazy loaded add exam")

    let objUprofile = localStorage.getItem("uprofile");
    if (objUprofile != null) {
      this.leagueUser.leagueId = JSON.parse(objUprofile)['league_id'];
      this.uprofile = JSON.parse(objUprofile);
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
