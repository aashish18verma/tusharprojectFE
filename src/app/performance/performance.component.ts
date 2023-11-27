import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {
  public q1employees: Employee[];
  public q2employees: Employee[];
  public q3employees: Employee[];
  public q4employees: Employee[];

  constructor(private router: Router, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getQ1Employees();
    this.getQ2Employees();
    this.getQ3Employees();
    this.getQ4Employees();
  }

  getEmployees() {
    this.router.navigate(['/']);
  }

  public getQ1Employees(): void {
    console.log('Fetching all employees...');
    this.employeeService.getQ1Employees().subscribe(
      (response: Employee[]) => {
        console.log(response);
        this.q1employees = response;
      },
      (error: HttpErrorResponse) => {
        console.error(error);
      }
    );
  }
  public getQ2Employees(): void {
    console.log('Fetching all employees...');
    this.employeeService.getQ2Employees().subscribe(
      (response: Employee[]) => {
        console.log(response);
        this.q2employees = response;
      },
      (error: HttpErrorResponse) => {
        console.error(error);
      }
    );
  }


  public getQ3Employees(): void {
    console.log('Fetching all employees...');
    this.employeeService.getQ3Employees().subscribe(
      (response: Employee[]) => {
        console.log(response);
        this.q3employees = response;
      },
      (error: HttpErrorResponse) => {
        console.error(error);
      }
    );
  } public getQ4Employees(): void {
    console.log('Fetching all employees...');
    this.employeeService.getQ4Employees().subscribe(
      (response: Employee[]) => {
        console.log(response);
        this.q4employees = response;
      },
      (error: HttpErrorResponse) => {
        console.error(error);
      }
    );
  }
}
