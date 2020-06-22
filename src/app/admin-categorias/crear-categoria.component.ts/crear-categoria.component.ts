import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import Categoria from 'src/app/core/models/categoria.model';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html'
})
export class CrearCategoriaComponent implements OnInit {
  categoria: Categoria;

  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.categoria = {} as Categoria;
    const params = this.activatedRoute.params.subscribe(params => {
      this.categoria.id = params['id'];
    });
    params.unsubscribe();
  }

  ngOnInit() {
    if (this.categoria.id) {
      this.apiService.getCategoria(this.categoria.id).subscribe((res: any) => this.categoria = res[0]);
    }
  }

  crear() {
    this.apiService.crearCategoria(this.categoria).subscribe(res => this.router.navigateByUrl('/admin/categorias'));
  }

  actualizar() {
    this.apiService.actualizarCategoria(this.categoria).subscribe(res => this.router.navigateByUrl('/admin/categorias'));
  }
}
