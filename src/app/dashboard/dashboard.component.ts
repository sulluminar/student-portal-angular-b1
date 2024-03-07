import { Component, OnInit } from '@angular/core';
import { AdminapiService } from '../service/adminapi.service';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  selected: Date | null = new Date()
  showSideBar: boolean = true;
  studentCount: number = 0;
  Highcharts = Highcharts;
  chartOptions: {};
  editAdminStatus: boolean = false;
  profileImage: string = './assets/images/user1.png';
  constructor(private api: AdminapiService) {
    this.chartOptions = {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Student Details'
      },
      tooltip: {
        valueSuffix: '%'
      },
      plotOptions: {
        series: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: [{
            enabled: true,
            distance: 20
          }, {
            enabled: true,
            distance: -40,
            format: '{point.percentage:.1f}%',
            style: {
              fontSize: '1.2em',
              textOutline: 'none',
              opacity: 0.7
            },
            filter: {
              operator: '>',
              property: 'percentage',
              value: 10
            }
          }]
        }
      },
      series: [
        {
          name: 'Percentage',
          colorByPoint: true,
          data: [
            {
              name: 'B.tech',
              y: 55.02
            },
            {
              name: 'Polytechnic',
              sliced: true,
              selected: true,
              y: 26.71
            },
            {
              name: 'MCA',
              y: 1.09
            },
            {
              name: 'BCA',
              y: 15.5
            },
            {
              name: 'M TEC',
              y: 1.68
            }
          ]
        }
      ]
    }
  }
  ngOnInit(): void {
    this.getTotalStudents()
  }

  menuBar() {
    this.showSideBar = !this.showSideBar
  }
  getTotalStudents() {
    this.api.getAllStudents().subscribe({
      next: (res: any) => {
        console.log(res)
        this.studentCount = res.length - 1;
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
  edit() {
    this.editAdminStatus = true;
  }
}
