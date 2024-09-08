import { NgClass, NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ServiceExamSectionService } from '../../service/service-exam-section.service';

@Component({
  selector: 'app-create-exam',
  standalone: true,
  imports: [NgFor, FormsModule, RouterLink, RouterOutlet, NgClass, NgIf],
  templateUrl: './AddExam.component.html',
  styleUrl: './AddExam.component.css'
})

export class CreateExamComponent {



goto_Exams() {
  this.router.navigateByUrl("Exam-Center/ShowExam")

}
goto_AddStudent() {
    
  this.router.navigateByUrl("Add-Student")

  }
goto_Students() {
  this.router.navigateByUrl("Show-Student")
}

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


  new_created_q: question[] = [];
  filteredQuestions: question[] = [];
  questiondatabase: question[] = [];
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



   addexamdisable:Boolean=true
  ngOnInit() {
    // let objUprofile = localStorage.getItem("uprofile");
    // if (objUprofile != null) {
    //   this.user = JSON.parse(objUprofile)['league_name'];
    // }

    var demoobj: Qdata = {
      qSubject: "Marathi",
      author: "kalpi",
      grade: "k1",
      qType: ""
    }

    console.log("before http get")
    this.http.post<question[]>("https://zedpea.co.in/api/questions.php", demoobj).subscribe(data => {
      console.log(data)
      this.questiondatabase = data;
      this.filteredQuestions = data;
    })
    // this.filterQuestions=this.questiondatabase

  }



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



  Add_this_Q(idq: any) {
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


  CQArray: question[][] = []

  savenewquestionindex: number = 0
  savenewquestion() {
    //When you add a new array to CQArray, ensure that you are adding a new instance of the array, not modifying an existing one.
    // Use the spread operator to create a new instance of new_created_q [... this.new_created_q]
    this.saved = true;
    this.router.navigateByUrl("examdetail")

    this.CQArray[this.savenewquestionindex++] = [...this.new_created_q];
    console.log(this.CQArray);
    this.serviveExamSection.Add_this_Q(this.CQArray);
    this.new_created_q = [];
    this.itterator = 0
  }


  showcreatedtests() {
    this.router.navigateByUrl("exam-section/ShowExams")

  }

  
    
  toggleAll() {
    this.saved = !this.saved;
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
  }

}

interface question {
  qnumber: string
  title: string
  topic: string
  description: string
  diagram: string
  template: string
  grade: string
  qsubject: string
  author: string
}

interface Qdata {
  qSubject: string,
  author: string,
  grade: string,
  qType: string
}