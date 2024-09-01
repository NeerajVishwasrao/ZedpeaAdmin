import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceExamSectionService {

  // private behaviorsubject = new BehaviorSubject<any>(null);
  // this.behaviorsubject.next(info)
  // return this.behaviorsubject.asObservable();

  http = inject(HttpClient);
  private studenturl='/assets/studentdatabase.json';

  QarrayContainer: any

  
  constructor() { }

  Add_this_Q(QarrayContainer: any) {
    this.QarrayContainer = QarrayContainer;
  }

  get_student_data():Observable<any>{
   
    return this.http.get<any>(this.studenturl);
  }

}
