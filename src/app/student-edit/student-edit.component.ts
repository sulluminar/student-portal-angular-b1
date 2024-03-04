import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapiService } from '../service/adminapi.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  student: any = {}
  constructor(private route: ActivatedRoute, private api: AdminapiService, private router: Router) {
  }
  ngOnInit(): void {
    this.route.params.subscribe((res: any) => {
      const { id } = res
      console.log(id);
      this.getStudentDetails(id)
    })
  }
  getStudentDetails(id: string) {
    this.api.viewStudentById(id).subscribe({
      next: (res: any) => {
        console.log(res)
        this.student = res;
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
  editStudent(id: any) {
    this.api.updateStudent(id, this.student).subscribe({
      next: (res: any) => {
        Swal.fire({
          title: "Wow",
          text: "Student updated successfully",
          icon: "success"
        });
        this.router.navigateByUrl("students")
      },
      error: (err: any) => {
        Swal.fire({
          title: "Ooops...",
          text: "Failed to update student",
          icon: "info"
        });
      }
    })
  }
  restore(id:any){
    this.getStudentDetails(id)
  }

}
