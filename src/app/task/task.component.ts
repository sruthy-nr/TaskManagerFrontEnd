import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { PaginatePipe } from 'ngx-pagination';
import { NgxPaginationModule } from 'ngx-pagination';
import { Router } from '@angular/router';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  
  id:any
  name:any

  p: number = 1;
  total: number = 0;
  
  constructor(private api: ApiService,private router: Router) {
    // this.view()
  }
  
  ngOnInit(): void{
    this.api.viewTask().subscribe(
      (response:any) => {
        this.tasks = response.taskList//dto
        console.log(this.tasks)
       
        
        
      }
    )
  }
  
  tasks: any = []

  
  deletebuttonclick = () => {
    let tasks: any = {
      "id": this.id
    }
    this.api.deleteTask(tasks).subscribe(
      (response: any) => {
        console.log(response)
        if (response.status == 'success') {
        
          this.ngOnInit();
          
        }
      }
    )
  }

 
  
  
  changeId = (id:any,name:any)=>
  {
    this.id = id;
    this.name = name;
  }
  names:any=[]
  
  
  pageChangeEvent(event: number){

    this.p = event;
    
    //  this.view();
    this.ngOnInit();
  }

}
