import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceExamSectionService } from '../service/service-exam-section.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-show-created-test',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './show-created-test.component.html',
  styleUrl: './show-created-test.component.css'
})
export class ShowCreatedTestComponent {
  index: number = 1
  Qcontainer: any
  serviceExamSection = inject(ServiceExamSectionService);
  ngOnInit() {
    this.Qcontainer = this.serviceExamSection.QarrayContainer
  }
  incrementIndex(){
    return this.index++
  }
}
