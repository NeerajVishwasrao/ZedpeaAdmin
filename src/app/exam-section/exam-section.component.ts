import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-exam-section',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './exam-section.component.html',
  styleUrl: './exam-section.component.css'
})
export class ExamSectionComponent {
  router = inject(Router)
  logout() {
    localStorage.removeItem("password");
    this.router.navigateByUrl("");
  }

}
