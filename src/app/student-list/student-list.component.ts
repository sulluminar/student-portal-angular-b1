import { Component, OnInit } from '@angular/core';
import { AdminapiService } from '../service/adminapi.service';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  allStudents: any = [];
  searchKey:string= "";
  p:number = 1;
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
generatePdf(){
  const pdf = new jsPDF();
  let head=[['id','Student Name','Email','Status']]
  let body:any = []
  this.allStudents.forEach((item:any)=>{
    body.push([item.id,item.name, item.email, item.status])
  })
  pdf.setFontSize(16);
  pdf.text('Student Details',10,10)
  autoTable(pdf,{head:head,body:body})
  pdf.output('dataurlnewwindow')
  pdf.save("student-details.pdf")
}
}
