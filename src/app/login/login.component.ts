import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  router = inject(Router);

  ngOnInit() {
    if (localStorage.getItem("password")!=null) {
      this.router.navigateByUrl("exam-section/create-exam")
    }
  }
  LoginCredentials: { email: string; password: string } = {
    email: "",
    password: ""
  }


  verify() {
    if (this.LoginCredentials.email == "valid" && this.LoginCredentials.password == "valid") {

     localStorage.setItem("password", this.LoginCredentials.password)
       this.router.navigateByUrl("exam-section/create-exam")

    } else {
      alert("invalid credentials")
    }

  }

}
