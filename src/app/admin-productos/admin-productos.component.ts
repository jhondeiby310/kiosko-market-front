import { Component, OnInit } from '@angular/core';
import Producto from '../core/models/producto.model';
import { ApiServiceP } from '../core/services/api-products.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-admin-productos',
  templateUrl: './admin-productos.component.html',
  styleUrls: ['./admin-productos.component.css']
})

export class AdminProductosComponent implements OnInit {
  productos: Producto[];
  constructor(private apiServiceProducto: ApiServiceP, private router: Router) { }

  ngOnInit() {
    this.loadProductos();
  }

  loadProductos() {
    this.apiServiceProducto.obtenerProductos().subscribe((res: any) => this.productos = res);
  }

  eliminar(id: number) {
    this.apiServiceProducto.eliminarProducto(id).subscribe(

      (response: any) => {
        console.log(response);
        this.loadProductos();
      },

      (error) => {
        alert('Por favor vuelva a iniciar sesión');
        this.router.navigateByUrl('/login');
        console.log(error.status);

      }
    );
  }
}
