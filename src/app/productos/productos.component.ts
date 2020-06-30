import { Component, OnInit } from '@angular/core';
import Producto from '../core/models/producto.model';
import { ApiServiceP } from '../core/services/api-products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers: [ApiServiceP]
})
export class ProductoComponent implements OnInit {
  readonly PARAM_ID_CATEGORIA = 'id';
  categoriaId: number;
  productos: Producto[];

  constructor(private apiService: ApiServiceP, private activatedRoute: ActivatedRoute) { 
    const params = this.activatedRoute.params.subscribe(params => {
      this.categoriaId = params[this.PARAM_ID_CATEGORIA];
    });
    params.unsubscribe();
  }

  ngOnInit() {
    this.apiService.obtenerProductosCategoria(this.categoriaId).subscribe(
      (res: any) => this.productos = res,
      err => console.log(err)
    )
  }

}

