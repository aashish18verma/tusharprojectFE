import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee, LoginRequest, q1Rating, q2Rating, q3Rating, q4Rating } from './employee';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiServerUrl}/employee/all`);
  }

  public login(loginRequest: LoginRequest): Observable<HttpResponse<LoginRequest> | HttpErrorResponse> {
    return this.http.post<LoginRequest>(`${this.apiServerUrl}/employee/login`, loginRequest, { observe: 'response' });
  }

  public getQ1Employees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiServerUrl}/employee/q1all`);
  }
  public getQ2Employees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiServerUrl}/employee/q2all`);
  }
  public getQ3Employees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiServerUrl}/employee/q3all`);
  }
  public getQ4Employees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiServerUrl}/employee/q4all`);
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiServerUrl}/employee/add`, employee);
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiServerUrl}/employee/update`, employee);
  }

  public updateQ1Employee(employeeid: number, q1Rating: q1Rating): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiServerUrl}/employee/update-q1/${employeeid}`, q1Rating);
  }
  public updateQ2Employee(employeeid: number, q2Rating: q2Rating): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiServerUrl}/employee/update-q2/${employeeid}`, q2Rating);
  }
  public updateQ3Employee(employeeid: number, q3Rating: q3Rating): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiServerUrl}/employee/update-q3/${employeeid}`, q3Rating);
  }
  public updateQ4Employee(employeeid: number, q4Rating: q4Rating): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiServerUrl}/employee/update-q4/${employeeid}`, q4Rating);
  }


  public deleteEmployee(employeeid: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/${employeeid}`);
  }

}
