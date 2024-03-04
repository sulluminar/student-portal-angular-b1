
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


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
}
