import { Component, OnInit } from '@angular/core';
import Categoria from '../core/models/categoria.model';
import { ApiService } from '../core/services/api.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
  providers: [ApiService]
})
export class CategoriasComponent implements OnInit {

  categorias: Categoria[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.categorias = this.apiService.obtenerCategorias();
  }

}
