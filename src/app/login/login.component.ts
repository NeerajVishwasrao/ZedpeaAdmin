import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { LoginService } from './login.service';
import { LUser } from './luser.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  router = inject(Router);
  leaguelist: Array<any> = [];

  ngOnInit() {
    // localStorage.setItem("uprofile","tejas")

    if (localStorage.getItem("uprofile")!=null) {
      this.router.navigateByUrl("Exam-Center/AddExam")
    }else{
      this.loginService.league()
      .subscribe(
        (res) => {
          console.log(res);
          this.leaguelist = res;
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

    let user = <LUser>{};
    user = { 
      leagueName: this.LoginCredentials.email,
      password: this.LoginCredentials.password
    }

    this.loginService.myleague(user)
    .subscribe(
      (res) => {
        console.log(res);
        this.response = res;
        if (this.response.length) {
          localStorage.setItem("uprofile",JSON.stringify(this.response[0]))
            this.router.navigateByUrl("Exam-Center/AddExam")
         } else {
            alert("Invalid Credentials")
         }
      }
    );

  }

}
