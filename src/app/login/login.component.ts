import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule, NgClass, NgFor } from '@angular/common';
import { LoginService } from './login.service';
import { LUser } from './luser.model';
import { LoaderComponent } from '../Reusable-view/loader/loader.component';
import { Loader2Component } from '../Reusable-view/loader-2/loader-2.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, NgClass, LoaderComponent, Loader2Component],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLoaderActive: boolean = true;
  isLogging: boolean = false;;
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword
  }
  router = inject(Router);
  leaguelist: Array<any> = [];
  showPassword: boolean = false;

  ngOnInit() {
    // localStorage.setItem("uprofile","tejas")

    if (localStorage.getItem("uprofile") != null) {
      this.router.navigateByUrl("Exam-Center/AddExam")
    } else {
      this.loginService.league()
        .subscribe(
          (res) => {
            console.log(res);
            this.leaguelist = res;
            this.isLoaderActive = false
          }
        );
    }

  }
  LoginCredentials: { email: string; password: string } = {
    email: "",
    password: ""
  }

  response: Array<any> = [];

  constructor(private loginService: LoginService
  ) {
    loginService = inject(LoginService);
  }


  verify() {
    this.isLogging = true
    let user = <LUser>{};
    user = {
      leagueName: this.LoginCredentials.email,
      password: this.LoginCredentials.password
    }

    this.loginService.myleague(user)
      .subscribe((res) => {
        this.isLogging = false
        console.log(res);
        this.response = res;
        if (this.response.length) {
          localStorage.setItem("uprofile", JSON.stringify(this.response[0]))
          this.router.navigateByUrl("Exam-Center/AddExam")
        } else {
          alert("Invalid Credentials")
        }
      }
      );

  }

}
