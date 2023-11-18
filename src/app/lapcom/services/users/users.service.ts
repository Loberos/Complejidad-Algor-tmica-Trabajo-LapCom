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
    const body = { email, password };
    return this.http.post(this.apiUrl, body);
  }
  register(fullname: string, email: string, password: string, profession: string): Observable<any> {
    const body = { fullname, email, password, profession };
    return this.http.post(this.apiUrl2, body);
  }

}
