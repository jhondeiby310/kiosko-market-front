import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import Categoria from '../core/models/categoria.model';

@Component({
  selector: 'app-admin-categorias',
  templateUrl: './admin-categorias.component.html',
})

export class AdminCategoriasComponent implements OnInit {
  categorias: Categoria[];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadCateogiras();
  }

  loadCateogiras() {
    this.apiService.obtenerCategorias().subscribe((res:any) => this.categorias = res);
  }

  eliminar(id: number) {
    this.apiService.eliminarCategoria(id).subscribe(res => this.loadCateogiras());
  }
}
