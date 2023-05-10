import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [{
  path:"",
  component:NavigationComponent
},
{
  path:"task",
  component:TaskComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
