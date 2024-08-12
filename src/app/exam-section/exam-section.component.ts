import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-exam-section',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './exam-section.component.html',
  styleUrl: './exam-section.component.css'
})
export class ExamSectionComponent {

}
