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
import { ApiServiceP } from './core/services/api.serviceproducts';
import { HttpClientModule } from '@angular/common/http';
import { AdminProductosComponent } from './admin-productos/admin-productos.component';
import { CrearProductoComponent } from './admin-productos/crear-producto.component.ts/crear-producto.component';
import { AdminCategoriasComponent } from './admin-categorias/admin-categorias.component';
import { CrearCategoriaComponent } from './admin-categorias/crear-categoria.component.ts/crear-categoria.component';

const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
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
    path: 'admin/categorias',
    component: AdminCategoriasComponent
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
    path: 'categoria',
    component: CrearCategoriaComponent
  },
  {
    path: 'categoria/:id',
    component: CrearCategoriaComponent
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
    AdminCategoriasComponent, 
    CrearCategoriaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [ApiService, ApiServiceP],
  bootstrap: [AppComponent]
})
export class AppModule { }
