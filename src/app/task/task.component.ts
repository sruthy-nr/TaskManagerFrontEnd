import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { PaginatePipe } from 'ngx-pagination';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  
  router: any;
  id:any
  name:any

  p: number = 1;
  total: number = 0;
  

  view=()=>{
    this.api.viewTask().subscribe(
      (response:any) => {
        this.tasks = response.taskList//dto
        console.log(this.tasks)
      }
    )
  }

  // viewName=()=>{
  //   let names : any = {
  //     "name":this.name
  //   }
  // }
  
  constructor(private api: ApiService, private route: Router) {

    this.view()

  }
  
  tasks: any = []

  
  deletebuttonclick = () => {
    let tasks: any = {
      "id": this.id
    }
    this.api.deleteTask(tasks).subscribe(
      (response: any) => {
        console.log(response)
        if (response.status == "success") {

          window.location.reload();

        }
      }
    )
  }
  
  
  changeId = (id:any,name:any)=>
  {
    this.id = id;
    this.name = name;
    // console.log(this.name)
    // this.viewName(); 
  }
  names:any=[]
  
  
  pageChangeEvent(event: number){

    this.p = event;
    
     this.view();
  }

}
