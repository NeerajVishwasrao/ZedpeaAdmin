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
  filteredQuestions: any[] = [];

  questiondatabase: any = ''
  http = inject(HttpClient);
  searchtext: string = ''
  searchtext1: string = ''
  searchtext2: string = ''

  ngOnInit() {
    console.log("before http get")
    this.http.get("/assets/questiondatabase.json").subscribe(data => {
      console.log(data)
      this.questiondatabase = data
    })

  }
  
  
  // filterQuestions() {
  //   this.filteredQuestions = this.questiondatabase.filter(Qcontainer =>
  //     Qcontainer.std.toLowerCase().includes(this.searchtext1.toLowerCase()) &&
  //     Qcontainer.template.toLowerCase().includes(this.searchtext2.toLowerCase())
  //   );
  // }
}
