
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminapiService {

  constructor(private http:HttpClient) { }
  server_url = 'http://localhost:4000';

  loginAdmin(){
   return this.http.get(`${this.server_url}/student/1`)
  }
  registerStudent(student:any){
    return this.http.post(`${this.server_url}/student`,student)
  }
  getAllStudents(){
    return this.http.get(`${this.server_url}/student`)
  }
  deleteStudent(id:any){
    return this.http.delete((`${this.server_url}/student/${id}`))
  }
  viewStudentById(id:any){
    return this.http.get(`${this.server_url}/student/${id}`)
  }
  updateStudent(id:any, reqBody:any){
    return this.http.put(`${this.server_url}/student/${id}`,reqBody)
  }
  updateAdmin(admin:any){
    return this.http.put(`${this.server_url}/student/1`,admin)
  }
  // create a behavioural subject with an initial value
  public sharedData= new BehaviorSubject(false)
  // create a function to update value
  updateData(data:any){
    this.sharedData.next(data)
  }
}
