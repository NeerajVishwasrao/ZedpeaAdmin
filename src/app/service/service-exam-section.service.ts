import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { studentdata } from '../create-classroom/Add-Students/Add-Student.model';


@Injectable({
  providedIn: 'root'
})
export class ServiceExamSectionService {
  exam: any

  private behaviorsubject = new BehaviorSubject<any>(null);
  // return this.behaviorsubject.asObservable();

  http = inject(HttpClient);

  private studenturl = 'https://zedpea.co.in/api/students.php';
  // private studenturl='https://zedpea.co.in/api/students.php';

  QarrayContainer: any
  store: any


  returnShowonetest(): Observable<any[]> {
    this.behaviorsubject.next(this.exam);
    return this.behaviorsubject.asObservable();

  }
  

  students(user: studentdata):Observable<any> {

    return this.http.post<any>('https://zedpea.co.in/api/students.php', user);

  }

  mystudents() {
    // this is just the HTTP call, 
    console.log("in login service")
    return this.http.get<any>('https://zedpea.co.in/api/mystudents.php');

  }



  constructor() { }

  Add_this_Q(QarrayContainer: any) {
    this.QarrayContainer = QarrayContainer;

  }

  getallexmass(leagueUser: user){
    return this.http.post<any>('https://zedpea.co.in/api/exams.php', leagueUser);
  }


  method1(info: string): void {
    this.store = info;

  }
  sendOnetest(exam: string) {
    this.exam = exam
  }
}

interface user {
  leagueId: string
}
