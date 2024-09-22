import { Component, inject } from '@angular/core';
import { ServiceExamSectionService } from '../../service/service-exam-section.service';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { LoaderComponent } from '../../Reusable-view/loader/loader.component';
import { MenuButtonsComponent } from '../../Reusable-view/menu-buttons/menu-buttons.component';

@Component({
  selector: 'app-show-students',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, RouterLink, LoaderComponent, MenuButtonsComponent, TitleCasePipe],
  templateUrl: './show-students.component.html',
  styleUrl: './show-students.component.css'
})

export class ShowStudentsComponent {
  isLoaderActive: boolean = true;

  openForm() {
    throw new Error('Method not implemented.');
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
          this.studentList = data;
          this.isLoaderActive = false
        }
      );
  }

}

interface user {
  leagueId: string
}



