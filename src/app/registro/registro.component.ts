import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  password: string = '';
  repeatPassword: string = '';
  mensaje: string = '';

  validarContrasenas(): void {
    if (this.password === this.repeatPassword) {
      this.mensaje = '¡Bienvenido!';
    } else {
      this.mensaje = 'Usuario o contraseña inválidos.';
    }
}
}
