import { Component, OnInit } from '@angular/core';
import { ApiServiceP } from 'src/app/core/services/api.serviceproducts';
import Producto from 'src/app/core/models/producto.model';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-comprar-producto',
  templateUrl: './comprar-producto.component.html',
  providers: [ApiServiceP]
})
export class ComprarProductoComponent implements OnInit {
  readonly PARAM_CODIGO_PRODUCTO = 'codigo';
  productoCodigo: number;
  producto: Producto;

  constructor(private apiServiceCompra: ApiServiceP, private router: Router, private activatedRoute: ActivatedRoute) {
    const params = this.activatedRoute.params.subscribe(params => {
      this.productoCodigo = params[this.PARAM_CODIGO_PRODUCTO];
    });
    params.unsubscribe();
}

  ngOnInit() {
    this.apiServiceCompra.obtenerProductocompra(this.productoCodigo).subscribe(
        (res: any) => this.producto = res,
        err => console.log(err)
      );
   }

  compra() {
    return alert('Compra exitosa, su producto esta en camino');
  }
}
