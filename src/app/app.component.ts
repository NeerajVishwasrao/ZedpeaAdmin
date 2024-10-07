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
  title = 'Zedpea_Admin';
  titleuser = 'League';
  currentDate?: Date;
  targetDate?: Date;
  cDateMillisecs?: number;
  tDateMillisecs?: number;
  difference?: number;
  seconds?: number;
  minutes?: number;
  hours?: number;

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

  ngAfterViewInit() {
    this.mytimer(); // Call timer on component initialization
    setInterval(() => this.mytimer(), 1000); //

    
  }

  timershow: boolean = false;
  mytimer() {
    if (this.hours == 0 && this.minutes == 0 && this.seconds == 0) {
      this.timershow = false;
    }
    else {
      this.currentDate = new Date();
      this.targetDate = new Date(2024, 10, 3);
      this.cDateMillisecs = this.currentDate.getTime();
      this.tDateMillisecs = this.targetDate.getTime();

      this.difference = this.tDateMillisecs - this.cDateMillisecs;
      this.seconds = Math.floor(this.difference / 1000);
      this.minutes = Math.floor(this.seconds / 60);
      this.hours = Math.floor(this.minutes / 60);
      // --------------------------------------------------------------------------

      this.hours %= 24;
      this.minutes %= 60;
      this.seconds %= 60;

      this.hours = this.hours < 10 ? 0 + this.hours : this.hours
      this.minutes = this.minutes < 10 ? 0 + this.minutes : this.minutes
      this.hours += 16
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

    this.isSidebarActive = !this.isSidebarActive;
    console.log("isSidebarActive " + this.isSidebarActive)

    this.isfreeze = !this.isfreeze
    console.log("isfreeze is " + this.isfreeze)
  }

  router = inject(Router)
  isfreeze: boolean = false;
  student: any;
  isDropdownActive = false;

  logout() {
    localStorage.removeItem("uprofile");
    this.router.navigateByUrl("");
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

  isSidebarActive = false;

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    const clickedElement = event.target as HTMLElement;
    const sidebarElement = document.querySelector('.w3-sidebar');

    if (sidebarElement && !sidebarElement.contains(clickedElement)) {
      this.isSidebarActive = false;
      this.isfreeze = false;
      this.V_threeline = false
      this.H_threeline = true
      console.log("isfreeze in hostlistner  " + this.isfreeze)

    }
  }

}
