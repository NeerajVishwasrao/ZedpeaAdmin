import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CretedTestRoutingModule } from './single-creted-test-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CretedTestRoutingModule
  ],
  exports:[
    CretedTestRoutingModule
  ]
  
})
export class CretedTestModule { }
