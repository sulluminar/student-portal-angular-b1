import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { AdminapiService } from '../service/adminapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private api: AdminapiService, private router:Router) { }
  email: string = "";
  password: string = "";

  adminLogin() {
    if (!this.email || !this.password) {
      Swal.fire({
        title: "Ooops...",
        text: "Please fill the form completely",
        icon: "info"
      });
    }
    else {
      this.api.loginAdmin().subscribe({
        next: (res: any) => {
          console.log(res)
          const { email, password } = res;
          if (email == this.email && password == this.password) {
            Swal.fire({
              title: "Wow",
              text: "Login Successfull",
              icon: "success"
            });
            this.router.navigateByUrl('dashboard')
          }
          else {
            Swal.fire({
              title: "Ooops..",
              text: "Invalid username or password",
              icon: "error"
            });
          }
        },
        error: (res: any) => {
          console.log(res)
        }
      })

    }

  }
}
