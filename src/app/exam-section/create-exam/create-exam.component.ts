import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { SearchexamPipe } from './searchexam.pipe';

@Component({
  selector: 'app-create-exam',
  standalone: true,
  imports: [NgFor, FormsModule, SearchexamPipe],
  templateUrl: './create-exam.component.html',
  styleUrl: './create-exam.component.css'
})
export class CreateExamComponent {
  filteredQuestions: question[] = [];

  questiondatabase: question[] = [];
  http = inject(HttpClient);
  searchtext: string = ''
  searchtext1: string = ''
  searchtext2: string = ''
  searchtext3: string = ''
  searchtext4: string = ''


  ngOnInit() {
    console.log("before http get")
    this.http.get<question[]>("/assets/questiondatabase.json").subscribe(data => {
      console.log(data)
      this.questiondatabase = data;
      this.filteredQuestions=data;
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
      Qcontainer.sub.toLowerCase().includes(this.searchtext2.toLowerCase())&&
      Qcontainer.template.toLowerCase().includes(this.searchtext3.toLowerCase())&&
      Qcontainer.question.toLowerCase().includes(this.searchtext4.toLowerCase())

    );
  }
}
interface question{
  std:string;
  sub:string;
  template:string;
  question:string;
}