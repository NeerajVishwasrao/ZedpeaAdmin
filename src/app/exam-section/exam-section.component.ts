import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-exam-section',
  standalone: true,
  imports: [RouterLink, RouterOutlet,NgClass],
  templateUrl: './exam-section.component.html',
  styleUrl: './exam-section.component.css'
})
export class ExamSectionComponent {
senddata(_t4: any) {
throw new Error('Method not implemented.');
}
Analysisperformance: boolean=true;
Createexam: boolean=true;
Showcreatedexams: boolean=true;


onclickforclass(buttonname:string){

  this.Createexam=true
  this.Showcreatedexams=true
  this.Analysisperformance=true

  if (buttonname=="Createexam") {
      this.Createexam=false

  } else if(buttonname=="Analysisperformance") {
    this.Analysisperformance=false
  }
  else{
    this.Showcreatedexams=false

  }
}
  // router = inject(Router)
  // logout() {
  //   localStorage.removeItem("uprofile");
  //   this.router.navigateByUrl("");
  // }

}
