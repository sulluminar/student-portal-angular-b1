import { Component, OnInit } from '@angular/core';
import { AdminapiService } from '../service/adminapi.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  allStudents: any = [];
  searchKey:string= "";
  constructor(private api: AdminapiService) { }
  ngOnInit(): void {
    this.getAllStudents()
  }

  getAllStudents() {
    this.api.getAllStudents().subscribe({
      next: (res: any) => {
        console.log(res)
        this.allStudents = res;
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
  deleteStudent(id: string) {
    this.api.deleteStudent(id).subscribe({
      next: (res: any) => {
        Swal.fire({
          title: "Wow",
          text: "Student deleted successfully",
          icon: "success"
        });
        this.getAllStudents()
      },
      error: (err: any) => {
        Swal.fire({
          title: "Ooops...",
          text: "Failed to delete student",
          icon: "info"
        });
      }
    })
  }

  sortById(){
    this.allStudents.sort((a:any,b:any)=>{
      return a.id-b.id
    })
  }
  sortByname(){
    // localeCompare() is used to compare strings
    this.allStudents.sort((a:any, b:any)=>{
      return a.name.localeCompare(b.name)
    })
  }

}
