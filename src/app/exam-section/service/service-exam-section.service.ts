import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceExamSectionService {

  // private behaviorsubject = new BehaviorSubject<any>(null);
  // this.behaviorsubject.next(info)
  // return this.behaviorsubject.asObservable();


  QarrayContainer: any
  constructor() { }

  Add_this_Q(QarrayContainer: any) {
    this.QarrayContainer = QarrayContainer;
  }


}
