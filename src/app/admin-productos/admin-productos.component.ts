import { Component, OnInit } from '@angular/core';
import Producto from '../core/models/producto.model';
import Usuario from '../core/models/usuario.model';
import { ApiServiceP } from '../core/services/api.serviceproducts';

@Component({
  selector: 'app-admin-productos',
  templateUrl: './admin-productos.component.html',
})

export class AdminProductosComponent implements OnInit {
  productos: Producto[];
  constructor(private apiServiceProducto: ApiServiceP) { }

  ngOnInit() {
    this.loadProductos();
  }

  loadProductos() {
    this.apiServiceProducto.obtenerProductos().subscribe((res:any) => this.productos = res);
  }

  eliminar(id: number) {
    this.apiServiceProducto.eliminarProducto(id).subscribe(res => this.loadProductos());
  }
}
