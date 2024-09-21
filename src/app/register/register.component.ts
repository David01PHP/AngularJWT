import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email = '';
  password = '';
  validEmails: string[] = [
    'george.bluth@reqres.in',
    'janet.weaver@reqres.in',
    'eve.holt@reqres.in',
    'charles.morris@reqres.in',
    'emma.wong@reqres.in',
    'tracey.ramos@reqres.in',
    'michael.lawson@reqres.in',
    'lindsay.ferguson@reqres.in',
    'tobias.funke@reqres.in',
    'byron.fields@reqres.in',
    'george.edwards@reqres.in',
    'rachel.howell@reqres.in'
  ];
  constructor(private authService: AuthService, private router: Router) { }

  // Método de registro
  // Método de registro
  onRegister(): void {
    this.authService.register(this.email, this.password).subscribe({
      next: () => {
        // Mostrar alerta de éxito al registrar correctamente
        alert('Registro exitoso. ¡Bienvenido!');
        this.router.navigate(['']);  // Redirigir al login después del registro exitoso
      },
      error: (err) => {
        const validEmailsList = this.validEmails.join('\n');  // Crea una lista de correos válidos
        alert(`Error en el registro: Nota: Sólo los usuarios definidos logran el registro.\n\nCorreos válidos:\n${validEmailsList}`);
      }
    });
  }
}
