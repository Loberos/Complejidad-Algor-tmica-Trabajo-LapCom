import { Injectable } from '@angular/core';
import {User} from "../../model/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticatedUser: User | null = null;

  setAuthenticatedUser(user: User) {
    this.authenticatedUser = user;
  }
}
