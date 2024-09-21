import { Component, inject } from '@angular/core';
import { ServiceExamSectionService } from '../../service/service-exam-section.service';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgFor,NgIf } from '@angular/common';
import { LoaderComponent } from '../../loader/loader.component';

@Component({
  selector: 'app-show-students',
  standalone: true,
  imports: [FormsModule, NgFor,NgIf,RouterLink,LoaderComponent],
  templateUrl: './show-students.component.html',
  styleUrl: './show-students.component.css'
})

export class ShowStudentsComponent {

  openForm() {
    throw new Error('Method not implemented.');
  }

  goto_AddStudent() {
    this.router.navigateByUrl("Add-Student")
  }
  goto_AddExams() {
    this.router.navigateByUrl("Exam-Center/AddExam")
  }

  goto_Exmas() {
    this.router.navigateByUrl("Exam-Center/ShowExam")
  }

  disstudents: boolean = true;
  addexamdisable: any;
  disexam: any;

  Studentdata: any;
  isnewstudent: boolean = false;

  router = inject(Router);
  serviceExamSection = inject(ServiceExamSectionService);
  http = inject(HttpClient);

  studentList: any[] = [];

  leagueUser: user =
    {
      leagueId: "101"
    }


  ngOnInit(): void {
    
    let objUprofile = localStorage.getItem("uprofile");
    if (objUprofile != null) {
      this.leagueUser.leagueId = JSON.parse(objUprofile)['league_id'];
    }

    this.http.post<any>('https://zedpea.co.in/api/students.php', this.leagueUser)
      .subscribe(
        (data: any) => {
          this.studentList  = data;
        }
      );
  }
 
}

interface user {
  leagueId: string
}



