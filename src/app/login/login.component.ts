import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  public login(loginForm: NgForm): void {
    this.employeeService.login(loginForm.value).subscribe(
      (response: HttpResponse<LoginRequest>) => {
        console.log(response);
        loginForm.reset();
        this.router.navigate(['/']);
      },
      (error: HttpErrorResponse) => {
        console.error(error);
        loginForm.reset();
      }
    );
  }

}
