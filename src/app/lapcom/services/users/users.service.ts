import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'https://josehp29.pythonanywhere.com/api/user/login';
  private apiUrl2 = 'https://josehp29.pythonanywhere.com/api/user/register';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    // Append email and password as query parameters
    const url = `${this.apiUrl}?email=${email}&password=${password}`;
    console.log('Login URL:', url);  // Agrega esta línea para imprimir la URL en la consola

    // Make a GET request
    return this.http.get(url);
  }
  register(fullName: string, email: string, password: string, professionalTitle: string): Observable<any> {
    const body = { fullName, email, password, professionalTitle };
    return this.http.post(this.apiUrl2, body);
  }

}
