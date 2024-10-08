import { NgClass, NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener,  inject,   ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule,  ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ServiceExamSectionService } from '../../service/service-exam-section.service';
import { NewExam } from '../../service/exams.model';
import { ReqQuestion, Question } from '../../service/questions.model';
import { LoaderComponent } from '../../Reusable-view/loader/loader.component';
import { MenuButtonsComponent } from '../../Reusable-view/menu-buttons/menu-buttons.component';
import { Modal } from 'bootstrap'; // This is for Bootstrap 5
import { ConstantDB } from '../../Contant/constant';

@Component({
  selector: 'app-create-exam',
  standalone: true,
  imports: [NgFor, FormsModule, RouterLink, RouterOutlet, NgClass, NgIf, LoaderComponent, MenuButtonsComponent, TitleCasePipe, ReactiveFormsModule],
  templateUrl: './AddExam.component.html',
  styleUrl: './AddExam.component.css'
})

export class CreateExamComponent {
ConstantDB = ConstantDB
  
  cheakAllCredentials() {
    if (this.QadditionAdditionForm.invalid) {
      this.QadditionAdditionForm.markAllAsTouched()
    } else {

      this.QadditionAdditionForm.markAsUntouched()
      this.saveNewExam()
      this.QadditionAdditionForm.reset()

    }
  }
  isLoaderActive: boolean = true;
  closePopup() {
    throw new Error('Method not implemented.');
  }
  popupVisible: boolean = false;

  showQNO: boolean = false;
  popupMessage: any;
  isPopupVisible: any;

  canclebiggerthan10warning() {
    this.biggerthan10 = false
  }

  saved: boolean = false;
  biggerthan10: boolean = false;

  router = inject(Router)
  serviveExamSection = inject(ServiceExamSectionService)

  itterator: number = 0;
  new_created_q: Question[] = [];
  filteredQuestions: Question[] = [];
  questiondatabase: Question[] = [];
  http = inject(HttpClient);
  searchtext: any = '';
  searchtext1: string = '';
  searchtext2: string = '';
  searchtext3: string = '';
  searchtext4: string = '';
  id: number = 0;

  user: any = '';

  isadded1: boolean = false;
  isadded4: boolean = false;
  isadded3: boolean = false;
  isadded2: boolean = false;

  qarrayadder: number = 0;
  isadded10: boolean = false;
  isadded9: boolean = false;
  isadded8: boolean = false;
  isadded7: boolean = false;
  isadded6: boolean = false;
  isadded5: boolean = false;
  isadded11: any;


  addexamdisable: Boolean = true
  ngOnInit() {
    console.log("Lazy loaded add exam")

    // let objUprofile = localStorage.getItem("uprofile");
    // if (objUprofile != null) {
    //   this.user = JSON.parse(objUprofile)['league_name'];
    // }

    var questionFilter: ReqQuestion = {
      subject: "Marathi",
      author: "sarika",
      grade: "k1",
    }

    console.log("before http get")
    this.http.post<Question[]>("https://zedpea.co.in/api/questions.php", questionFilter).subscribe(data => {
      this.questiondatabase = data;
      this.filteredQuestions = data;
      this.isLoaderActive = false
    })
    // this.filterQuestions=this.questiondatabase

  }


  usernameValidationMessage: string = ""

  QadditionAdditionForm: FormGroup = new FormGroup({
    examname: new FormControl("", Validators.required),
    grade: new FormControl("", Validators.required),
    discreption: new FormControl("", Validators.maxLength(300))
  })


  filterQuestions() {
    console.log("getting  called")
    // Return original data if any search text is empty
    // in js empty string is declared as false;
    //include cheaks if substring is present is string or not
    //qcontainer indicated first element of questiondatabase array
    // ctrl + shift + p for emoji

    this.filteredQuestions = this.questiondatabase.filter(Qcontainer =>
      Qcontainer.grade.toLowerCase().includes(this.searchtext1.toLowerCase()) &&
      Qcontainer.qsubject.toLowerCase().includes(this.searchtext2.toLowerCase()) &&
      Qcontainer.template.toLowerCase().includes(this.searchtext3.toLowerCase())

    );
  }
  allq() {
    this.filteredQuestions = this.questiondatabase
    console.log(this.filterQuestions + "this is all questions")
    this.searchtext2 = ""
    this.searchtext2 = ""
    this.searchtext2 = ""
  }


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  itterator2 = 0
  idq: any
  idForQuetion: any
  @ViewChild('AddExamForm') addExamFormElement?: ElementRef


  Add_this_Q(idq: any) {
    // console.log(this.idq)
    ++this.itterator2
    this.showQNO = true;
    if (this.isadded10 == false) {

      var demo = "isadded" + ++this.qarrayadder;
      if (demo == "isadded1") {
        this.isadded1 = true;



      } else if (demo == "isadded2") {
        this.isadded2 = true;
      }
      else if (demo == "isadded3") {
        this.isadded3 = true;
      }
      else if (demo == "isadded4") {
        this.isadded4 = true;
      }
      else if (demo == "isadded5") {
        this.isadded5 = true;
      }
      else if (demo == "isadded6") {
        this.isadded6 = true;
      }
      else if (demo == "isadded7") {
        this.isadded7 = true;
      }
      else if (demo == "isadded8") {
        this.isadded8 = true;
      }
      else if (demo == "isadded9") {
        this.isadded9 = true;
      }
      else if (demo == "isadded10") {
        this.isadded10 = true;

        const modelpopup = new Modal(this.addExamFormElement?.nativeElement);
        modelpopup.show();

      }

      // code for disable button after adding quetion

      this.idForQuetion = idq
      console.log(this.idForQuetion)

      if (this.idForQuetion && document.getElementById(idq)) {

        const button = document.getElementById(this.idForQuetion) as HTMLButtonElement
        console.log("--", this.idForQuetion)

        if (button) {
          button.innerText = 'This Quetion is Added'
          button.disabled = true
        }
      }

      console.log("question adding method calling" + idq);
      for (let index = 0; index < this.questiondatabase.length; index++) {
        if (idq == this.questiondatabase[index].qnumber) {
          this.new_created_q[this.itterator++] = this.questiondatabase[index]
        }
      }
      const vdeng = idq.toString();
    }
    else {
      this.biggerthan10 = true;
    }

  }


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  message: any = 'Push';
  newExam: NewExam =
    {
      leagueId: "104",
      examTitle: "Maths Type 1",
      description: "AUG test for K1 Maths",
      grade: "k1",
      q1: "mt01_q1",
      q2: "mt01_q2",
      q3: "mt01_q3",
      q4: "mt01_q4",
      q5: "mt01_q5",
      q6: "mt01_q6",
      q7: "mt01_q7",
      q8: "mt01_q8",
      q9: "mt01_q9",
      q10: "mt01_q10"
    }

  savenewquestionindex: number = 0


  CQArray: Question[][] = []


  saveNewExam() {
    console.log("save method called")
    //When you add a new array to CQArray, ensure that you are adding a new instance of the array, not modifying an existing one.
    // Use the spread operator to create a new instance of new_created_q [... this.new_created_q]
    if (this.QadditionAdditionForm.valid) {




      // this.CQArray[this.savenewquestionindex++] = [...this.new_created_q];
      this.CQArray[0] = [...this.new_created_q];

      this.serviveExamSection.Add_this_Q(this.CQArray);

      let objUprofile = localStorage.getItem("uprofile");
      if (objUprofile != null) {
        this.newExam.leagueId = JSON.parse(objUprofile)['league_id'];
        this.newExam = {
          "leagueId": this.newExam.leagueId,
          // "examTitle": this.QadditionAdditionForm.controls['examname']?.value,

          "examTitle": this.QadditionAdditionForm.get('examname')?.value,
          "description": this.QadditionAdditionForm.get('discreption')?.value,
          "grade": this.QadditionAdditionForm.get('grade')?.value,
          "q1": this.CQArray[0][0].qnumber,
          "q2": this.CQArray[0][1].qnumber,
          "q3": this.CQArray[0][2].qnumber,
          "q4": this.CQArray[0][3].qnumber,
          "q5": this.CQArray[0][4].qnumber,
          "q6": this.CQArray[0][5].qnumber,
          "q7": this.CQArray[0][6].qnumber,
          "q8": this.CQArray[0][7].qnumber,
          "q9": this.CQArray[0][8].qnumber,
          "q10": this.CQArray[0][9].qnumber
        }
      }

      this.http.post<any>("https://zedpea.co.in/api/newexam.php", this.newExam)
        .subscribe(data => {
          this.message = data.message;
        })
      this.saved = !this.saved;

      this.QadditionAdditionForm.reset()

      this.itterator = 0


    }
    else {

      this.QadditionAdditionForm.markAllAsTouched()
    }
  }


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  showcreatedtests() {
    this.router.navigateByUrl("exam-section/ShowExams")

  }


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



  toggleAll(show: string) {
    this.CQArray[0] = [...this.new_created_q];

    for (let index = 0; index <= 9; index++) {
      const button = document.getElementById(this.CQArray[0][index].qnumber) as HTMLButtonElement
      if (button) {
        button.innerHTML = 'Add <i class="bi bi-arrow-up-square"></i>';
        button.disabled = false
      }
    }

    console.log("toggle the data")
    this.isadded1 = false
    this.isadded2 = false
    this.isadded3 = false
    this.isadded4 = false
    this.isadded5 = false
    this.isadded6 = false
    this.isadded7 = false
    this.isadded8 = false
    this.isadded9 = false
    this.isadded10 = false
    this.qarrayadder = 0
    this.showQNO = false;
    this.new_created_q = [];
    this.itterator = 0
    this.itterator2 = 0
    if (show == "toggle secondary poppup") {
      this.saved = !this.saved;

    }

    this.QadditionAdditionForm.reset();

  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //button disble after adding a question
  isScrolledDown: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (window.scrollY > 180) {
      this.isScrolledDown = true;
    } else {
      this.isScrolledDown = false;
    }
  }
}








