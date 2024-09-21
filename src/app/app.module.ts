import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';  // Ya lo agregaste
import { MatFormFieldModule } from '@angular/material/form-field'; // <-- Importa MatFormFieldModule
import { MatInputModule } from '@angular/material/input'; // <-- Importa MatInputModule
import { MatButtonModule } from '@angular/material/button'; // <-- Para los botones

import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { AuthInterceptor } from './auth.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,  // <-- Asegúrate de agregar MatFormFieldModule aquí
    MatInputModule,      // <-- Asegúrate de agregar MatInputModule aquí
    MatButtonModule,     // <-- Para los botones de Angular Material
    MatDialogModule,
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
