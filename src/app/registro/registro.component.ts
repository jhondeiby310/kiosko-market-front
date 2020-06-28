import { Component, OnInit } from '@angular/core';
import { ApiServiceUser } from '../core/services/api.serviceusers';
import Usuario from '../core/models/usuario.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usuario: Usuario;

  constructor(private apiService: ApiServiceUser, private router: Router, private activatedRoute: ActivatedRoute) {
    this.usuario = {} as Usuario;
    const params = this.activatedRoute.params.subscribe(params => {
      this.usuario.id = params['id'];
    });
    params.unsubscribe();
   }

  ngOnInit() {
  }

  crear(){
    this.apiService.crearUsuario(this.usuario).subscribe(res => this.router.navigateByUrl('/home'));
  }
}
