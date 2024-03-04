import { Component } from '@angular/core';
import { Student } from '../student.model';
import Swal from 'sweetalert2';
import { AdminapiService } from '../service/adminapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent {
  student: any = {}
  constructor(private api:AdminapiService, private router:Router){}
  addStudent() {
    const { id, name, email, status } = this.student;
    if (!id || !name || !email || !status) {
      Swal.fire({
        title: "Ooops...",
        text: "Please fill the form completely",
        icon: "info"
      });
    }
    else {
        this.api.registerStudent(this.student).subscribe({
          next:(res:any)=>{
            Swal.fire({
              title: "Wow",
              text: "Student added successfully",
              icon: "success"
            });
            this.student = {}
            this.router.navigateByUrl('students')
          },
          error:(err:any)=>{
            Swal.fire({
              title: "Ooops...",
              text: "Failed to add student",
              icon: "info"
            });
          }
        })
    }

  }
  clearStudent(){
    this.student={}
  }
}
