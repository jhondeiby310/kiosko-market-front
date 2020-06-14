import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductoComponent } from './productos/productos.component'
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { ApiService } from './core/services/api.service';
import { ApiServiceP } from './core/services/api.serviceproducts';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';

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
    path: 'productos',
    component: ProductoComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    CategoriasComponent, 
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
  ],
  providers: [ApiService, ApiServiceP],
  bootstrap: [AppComponent]
})
export class AppModule { }
