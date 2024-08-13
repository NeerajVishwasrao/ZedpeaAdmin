import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowCreatedTestComponent } from './show-created-test.component';

const routes: Routes = [

  {path:"",component:ShowCreatedTestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowcrtRoutingModuleRoutingModule { }
