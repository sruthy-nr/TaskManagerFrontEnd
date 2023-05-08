import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { HttpClientModule } from "@angular/common/http";
import { NavigationComponent } from './navigation/navigation.component';
import { FormsModule } from'@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

const myRoute:Routes=[
  {
    path:"",
    component:NavigationComponent
  },
  {
    path:"task",
    component:TaskComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    NavigationComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    NgxPaginationModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
