import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';  
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  users: any[] = [];
  displayedColumns: string[] = ['id', 'email', 'first_name', 'last_name', 'actions'];

  constructor(private http: HttpClient,private router: Router) {}

  // Cargar los usuarios desde la API
  loadUsers(): void {
    this.http.get<any>('https://reqres.in/api/users').subscribe(response => {
      this.users = response.data;
    });
  }

  // Ver detalles de un usuario
  viewUser(userId: number): void {
    alert(`Ver detalles del usuario con ID: ${userId}`);
    // Aquí puedes redirigir a una vista de detalles o abrir un modal
  }

// Actualizar un usuario (simulación)
updateUser(userId: number): void {
  // Mostrar una alerta de confirmación antes de proceder
  const confirmUpdate = confirm(`¿Seguro que deseas actualizar al usuario con ID: ${userId}?`);
  
  if (confirmUpdate) {
    // Si el usuario confirma, muestra la alerta de actualización
    alert(`Usuario con ID: ${userId} ha sido actualizado.`);
    // Aquí podrías redirigir a una página de actualización o abrir un modal para editar
  } else {
    // Si el usuario cancela, muestra un mensaje opcional o no hacer nada
    alert('Actualización cancelada.');
  }
}


  // Eliminar un usuario
  deleteUser(userId: number): void {
    const confirmDelete = confirm(`¿Seguro que deseas eliminar al usuario con ID: ${userId}?`);
    if (confirmDelete) {
      this.http.delete(`https://reqres.in/api/users/${userId}`).subscribe({
        next: () => {
          alert('Usuario eliminado');
          this.users = this.users.filter(user => user.id !== userId);
        },
        error: err => {
          alert('Error al eliminar el usuario: ' + err.message);
        }
      });
    }
  }
  // Método para cerrar sesión
  logout(): void {
    // Aquí se eliminaría el token o la sesión del usuario
    localStorage.removeItem('token');  // Por ejemplo, eliminar un token JWT
    alert('Sesión cerrada exitosamente');
    
    // Redirigir al usuario a la página de inicio de sesión
    this.router.navigate(['']);
  }
}
