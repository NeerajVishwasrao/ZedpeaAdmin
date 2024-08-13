import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowcrtRoutingModuleRoutingModule } from './showcrt-routing-module-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ShowcrtRoutingModuleRoutingModule
  ],
  exports:[
    ShowcrtRoutingModuleRoutingModule
  ]
})
export class ShowcrtRoutingModuleModule { }
