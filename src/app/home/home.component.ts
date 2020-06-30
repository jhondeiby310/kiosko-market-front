import { Component, OnInit } from '@angular/core';
import { ApiServiceP } from '../core/services/api-products.service';
import Producto from '../core/models/producto.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ApiServiceP]
})
export class HomeComponent implements OnInit {

  constructor(private apiProductos: ApiServiceP) { }
  productos: Producto[];

  ngOnInit() {
    this.apiProductos.obtenerProductos().subscribe(
      (res: any) => this.productos = res,
      err => console.log(err)
    )
  }

}
