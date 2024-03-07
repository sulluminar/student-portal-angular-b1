import { Component, OnInit } from '@angular/core';
import { AdminapiService } from '../service/adminapi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  showSideBar: boolean = true;
  studentCount:number =0;
  constructor(private api:AdminapiService){}
  ngOnInit(): void {
    this.getTotalStudents()
  }

  menuBar() {
    this.showSideBar = !this.showSideBar
  }
  getTotalStudents(){
    this.api.getAllStudents().subscribe({
      next: (res: any) => {
        console.log(res)
        this.studentCount = res.length-1;
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
}
