import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getData(getData: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
  viewTask=()=>{
    return this.http.get("http://localhost:8080/Task/viewtask")
  }
  deleteTask=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/Task/deletetask",dataToSend)
  }
}
