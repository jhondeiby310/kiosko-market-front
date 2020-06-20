import { Component, OnInit } from '@angular/core';
import Producto from 'src/app/core/models/producto.model';
import { ApiServiceP } from 'src/app/core/services/api.serviceproducts';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html'
})
export class CrearProductoComponent implements OnInit {
  producto: Producto;

  constructor(private apiServiceProducto: ApiServiceP, private router: Router, private activatedRoute: ActivatedRoute) {
    this.producto = {} as Producto;
    const params = this.activatedRoute.params.subscribe(params => {
      this.producto.codigo = params['id'];
    });
    params.unsubscribe();
  }

  ngOnInit() {
    if (this.producto.codigo) {
      this.apiServiceProducto.getProducto(this.producto.codigo).subscribe((res: any) => this.producto = res[0]);
    }
  }

  crear() {
    this.apiServiceProducto.crearProducto(this.producto).subscribe(res => this.router.navigateByUrl('/admin/productos'));
  }

  actualizar() {
    this.apiServiceProducto.actualizarProducto(this.producto).subscribe(res => this.router.navigateByUrl('/admin/productos'));
  }

}
