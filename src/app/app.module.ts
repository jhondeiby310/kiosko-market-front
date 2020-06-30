import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductoComponent } from './productos/productos.component'
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { ApiService } from './core/services/api.service';
import { ApiServiceP } from './core/services/api-products.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminProductosComponent } from './admin-productos/admin-productos.component';
import { CrearProductoComponent } from './admin-productos/crear-producto.component.ts/crear-producto.component';
import { ApiServiceUser } from './core/services/api-users.service';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { ComprarProductoComponent } from './comprar-producto/comprar-producto.component';
import { CompraExitosaComponent } from './compra-exitosa/compra-exitosa.component';


const ROUTES: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'categorias',
    component: CategoriasComponent
  },
  {
    path: 'productos/:id',
    component: ProductoComponent
  },
  {
    path: 'admin/productos',
    component: AdminProductosComponent
  },
  {
    path: 'producto',
    component: CrearProductoComponent
  },
  {
    path: 'producto/:id',
    component: CrearProductoComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'comprar/:codigo',
    component: ComprarProductoComponent
  },
  {
    path: 'compra-exitosa',
    component: CompraExitosaComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    CategoriasComponent,
    ProductoComponent,
    AdminProductosComponent,
    CrearProductoComponent,
    RegistroComponent,
    LoginComponent,
    ComprarProductoComponent,
    CompraExitosaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [ApiService, ApiServiceP, ApiServiceUser],
  bootstrap: [AppComponent]
})
export class AppModule { }
