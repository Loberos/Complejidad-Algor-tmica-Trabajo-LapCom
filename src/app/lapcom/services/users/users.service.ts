import { Injectable } from '@angular/core';
import {BaseService} from "../../../share/services/base.service";
import {User} from "../../model/user";
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService<User> {
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndPoint = '/users';
  }

  authenticateUser(email: string, password: string): Observable<User | null> {
    return this.getAll().pipe(
      map(users => {
        // @ts-ignore
        const user = users.find((u: User) => u.email === email && u.password === password);
        return user || null;
      })
    );
  }
}
