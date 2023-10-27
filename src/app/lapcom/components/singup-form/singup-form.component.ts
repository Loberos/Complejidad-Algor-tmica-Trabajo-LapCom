import { Component } from '@angular/core';

@Component({
  selector: 'app-singup-form',
  templateUrl: './singup-form.component.html',
  styleUrls: ['./singup-form.component.css']
})
export class SingupFormComponent {
  fullname: string | undefined;
  profesion: string | undefined;
  email: string | undefined;
  password: string | undefined;
}
