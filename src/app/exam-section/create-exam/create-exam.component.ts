import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ServiceExamSectionService } from '../../service/service-exam-section.service';

@Component({
  selector: 'app-create-exam',
  standalone: true,
  imports: [NgFor, FormsModule, RouterLink, RouterOutlet],
  templateUrl: './create-exam.component.html',
  styleUrl: './create-exam.component.css'
})

export class CreateExamComponent {
  
studentdata() {
  this.router.navigateByUrl("/student")
}

  router = inject(Router)
  serviveExamSection = inject(ServiceExamSectionService)


  
  itterator: number = 0;


  new_created_q: question[] = [];
  filteredQuestions: question[] = [];
  questiondatabase: question[] = [];
  http = inject(HttpClient);
  searchtext: string = '';
  searchtext1: string = '';
  searchtext2: string = '';
  searchtext3: string = '';
  searchtext4: string = '';
  id: number = 0;
  user: any = '';
 


  ngOnInit() {

    if (localStorage.getItem("uprofile") != null) {
      this.user = localStorage.getItem("uprofile");
    }

    console.log("before http get")
    this.http.get<question[]>("/assets/questiondatabase.json").subscribe(data => {
      console.log(data)
      this.questiondatabase = data;
      this.filteredQuestions = data;
    })
    // this.filterQuestions=this.questiondatabase

  }


  filterQuestions() {
    // Return original data if any search text is empty
    // in js empty string is declared as false;
    //include cheaks if substring is present is string or not
    //qcontainer indicated first element of questiondatabase array
    // ctrl + shift + p for emoji
    console.log(this.searchtext1)
    if (!this.searchtext1 && !this.searchtext2 && !this.searchtext3 && !this.searchtext4) {
      this.filteredQuestions = this.questiondatabase;
    }
    this.filteredQuestions = this.questiondatabase.filter(Qcontainer =>
      Qcontainer.std.toLowerCase().includes(this.searchtext1.toLowerCase()) &&
      Qcontainer.sub.toLowerCase().includes(this.searchtext2.toLowerCase()) &&
      Qcontainer.template.toLowerCase().includes(this.searchtext3.toLowerCase()) &&
      Qcontainer.question.toLowerCase().includes(this.searchtext4.toLowerCase())

    );
  }


  Add_this_Q(idq: number) {
    console.log("question adding method calling" + idq);

    for (let index = 0; index < this.questiondatabase.length; index++) {
      if (idq == this.questiondatabase[index].id) {
        this.new_created_q[this.itterator++] = this.questiondatabase[index]
      }
    }
    const vdeng=idq.toString();
    
  }


  CQArray: question[][] = []

  savenewquestionindex: number = 0
  savenewquestion() {
    //When you add a new array to CQArray, ensure that you are adding a new instance of the array, not modifying an existing one.
    // Use the spread operator to create a new instance of new_created_q [... this.new_created_q]

    this.router.navigateByUrl("examdetail")

    this.CQArray[this.savenewquestionindex++] = [...this.new_created_q];
    console.log(this.CQArray);
    this.serviveExamSection.Add_this_Q(this.CQArray);
    this.new_created_q=[];
     this.itterator=0
  }


  showcreatedtests() {
    this.router.navigateByUrl("exam-section/showcreatedtests")

  }

  filterList(key:any, type:string) {

  }

}

interface question {
  id: number;
  std: string;
  sub: string;
  template: string;
  question: string;
  img: string
}

