import { Component, Inject, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import * as bootstrap from 'bootstrap'; // <-- Import Bootstrap JavaScript

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgClass,NgIf], // Ensure NgClass is included if needed
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngAfterViewInit() {
    // Initialize responsive nav dropdowns
    var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
    var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
      return new bootstrap.Dropdown(dropdownToggleEl)
    })
  }
freezepage() {
  this.isfreeze= !this.isfreeze
}
  router=inject(Router)
isfreeze: boolean=false;

goto_createexam() {
  this.router.navigateByUrl("exam-section/create-exam")}



goTo_showcreatedtests() {
this.router.navigateByUrl("exam-section/showcreatedtests")
}
goto_analysis_performance() {
  this.router.navigateByUrl("exam-section/analysis_performance")
}


goTo_showcreatedclassroom() {
  this.router.navigateByUrl("creteclassroom")
  }

student: any;

  title = 'Teachers Dashboard';
  isSidebarActive = false;
  isDropdownActive = false;
  

  logout() {
    localStorage.removeItem("uprofile");
    this.router.navigateByUrl("");
  }

  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
  }

  toggleDropdown() {
    this.isDropdownActive = !this.isDropdownActive;
    console.log(this.isDropdownActive+"tukelsang")
  }

  H_threeline:boolean=true
  V_threeline:boolean=false
  menudesign(point:number){
if (point==1) {
  this.V_threeline=true
  this.H_threeline=false
} else {
  this.V_threeline=false
  this.H_threeline=true
}
  }



  
// studentdata() {
//   this.router.navigateByUrl("/student")
// }
}
