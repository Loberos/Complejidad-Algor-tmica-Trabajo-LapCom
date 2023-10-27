import { Component } from '@angular/core';
import {UsersService} from "../../services/users/users.service";
import {AuthService} from "../../services/auth/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private usersService: UsersService, private authService: AuthService,    private router: Router) {}

  login() {
    this.usersService.authenticateUser(this.email, this.password).subscribe(user => {
      if (user) {
        this.authService.setAuthenticatedUser(user);
        this.router.navigate(['/home']);
      } else {
        this.errorMessage = 'Credenciales incorrectas';
      }
    });
  }
}

