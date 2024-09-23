import { Component, HostListener, Inject, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import * as bootstrap from 'bootstrap'; // <-- Import Bootstrap JavaScript

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgClass, NgIf], // Ensure NgClass is included if needed
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titleuser = 'League';
  ngOnInit() {
    // Initialize responsive nav dropdowns
    var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
    var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
      return new bootstrap.Dropdown(dropdownToggleEl)
    })

    let objUprofile = localStorage.getItem("uprofile");
    if (objUprofile != null) {
      this.titleuser = JSON.parse(objUprofile)['league_name'];
    }
  }
  freezepage() {
    this.isfreeze = !this.isfreeze
  }
  router = inject(Router)
  isfreeze: boolean = false;

  goto_createexam() {
    this.router.navigateByUrl("Exam-Center/AddExam")
  }



  goTo_showcreatedtests() {
    this.router.navigateByUrl("Exam-Center/ShowExam")
  }
  goto_analysis_performance() {
    this.router.navigateByUrl("exam-section/analysis_performance")
  }


  goTo_showcreatedclassroom() {
    this.router.navigateByUrl("Show-Student")

  }

  gotoAddStudent(){
    this.router.navigateByUrl("Add-Student")

  }

  student: any;

  isDropdownActive = false;


  logout() {
    localStorage.removeItem("uprofile");
    this.router.navigateByUrl("");
  }

  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
  }
  isExamCenterActive: boolean = false;
  IsClassroomActive: boolean = false;

  toggleDropdown(section: string) {

    if (section == "Exam-Center") {
      this.isExamCenterActive = !this.isExamCenterActive
    }
    else if (section == "ClassRoom") {
      this.IsClassroomActive = !this.IsClassroomActive
    }
  
  }

  H_threeline: boolean = true
  V_threeline: boolean = false
  menudesign(point: number) {
    if (point == 1) {
      this.V_threeline = true
      this.H_threeline = false
    } else {
      this.V_threeline = false
      this.H_threeline = true
    }
  }
  
  isSidebarActive = false; 
  closeSidebar() {
    this.isSidebarActive = false;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    const clickedElement = event.target as HTMLElement;
    const sidebarElement = document.querySelector('.w3-sidebar');

    if (sidebarElement && !sidebarElement.contains(clickedElement)) {
      this.closeSidebar();
    }
  }

  // studentdata() {
  //   this.router.navigateByUrl("/student")
  // }
}
