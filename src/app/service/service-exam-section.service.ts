import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { studentdata } from '../create-classroom/studentdata.model';


@Injectable({
  providedIn: 'root'
})
export class ServiceExamSectionService {

  students(user: studentdata) {

    return this.http.post<any>('https://zedpea.co.in/api/students.php', user);

  }

  mystudents() {
    // this is just the HTTP call, 
    console.log("in login service")
    return this.http.get<any>('https://zedpea.co.in/api/mystudents.php');

}


  // private behaviorsubject = new BehaviorSubject<any>(null);
  // this.behaviorsubject.next(info)
  // return this.behaviorsubject.asObservable();

  http = inject(HttpClient);

  private studenturl = '/assets/studentdatabase.json';
  // private studenturl='https://zedpea.co.in/api/students.php';

  QarrayContainer: any
  store: any


  constructor() { }

  Add_this_Q(QarrayContainer: any) {
    this.QarrayContainer = QarrayContainer;
  }

  get_student_data(): Observable<any> {

    return this.http.get<any>(this.studenturl);
  }


  method1(info: string): void {
    this.store = info;

  }
}
