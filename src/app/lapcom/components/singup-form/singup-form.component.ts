import { Component } from '@angular/core';
import {UsersService} from "../../services/users/users.service";

@Component({
  selector: 'app-singup-form',
  templateUrl: './singup-form.component.html',
  styleUrls: ['./singup-form.component.css']
})
export class SingupFormComponent {
  fullName: string = "";
  professionalTitle: string = "";
  email: string = "";
  password: string = "";

  constructor(private registrationService: UsersService) {
  }
  register() {
    this.registrationService.register(this.fullName, this.email, this.password, this.professionalTitle)
      .subscribe(
        (response) => {
          console.log('Registro exitoso', response);
        },
        (error) => {
          console.error('Error en el registro', error);
        }
      );
  }
}
