import { Component } from '@angular/core';
import {UsersService} from "../../services/users/users.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: UsersService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        console.log('Login exitoso', response);
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Error en el inicio de sesión', error);
      }
    );
  }


}


