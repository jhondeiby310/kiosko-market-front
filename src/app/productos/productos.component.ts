import { Component, OnInit } from '@angular/core';
import Producto from '../core/models/producto.model';
import { ApiServiceP } from '../core/services/api.serviceproducts';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers: [ApiServiceP]
})
export class ProductoComponent implements OnInit {

  productos: Producto[];

  constructor(private apiService: ApiServiceP) { }

  ngOnInit() {
    this.productos = this.apiService.obtenerProductosCategoria();
  }

}

