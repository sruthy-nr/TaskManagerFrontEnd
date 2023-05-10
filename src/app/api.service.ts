import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  constructor(private http:HttpClient) { }
  viewTask=()=>{
    return this.http.get("http://localhost:8080/Task/viewtask")
  }
  deleteTask=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/Task/deletetask",dataToSend)
  }
}
