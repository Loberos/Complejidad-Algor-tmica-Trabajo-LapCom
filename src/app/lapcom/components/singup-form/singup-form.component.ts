import { Component } from '@angular/core';
import {UsersService} from "../../services/users/users.service";

@Component({
  selector: 'app-singup-form',
  templateUrl: './singup-form.component.html',
  styleUrls: ['./singup-form.component.css']
})
export class SingupFormComponent {
  fullname: string = "";
  profession: string = "";
  email: string = "";
  password: string = "";

  constructor(private registrationService: UsersService) {
  }


  register() {
    this.registrationService.register(this.fullname, this.email, this.password, this.profession)
      .subscribe(
        (response) => {
          // Manejar la respuesta exitosa aquí (puede ser redirección a otra página, mostrar un mensaje de éxito, etc.)
          console.log('Registro exitoso', response);
        },
        (error) => {
          // Manejar errores aquí (puede ser mostrar un mensaje de error al usuario)
          console.error('Error en el registro', error);
        }
      );
  }
}
