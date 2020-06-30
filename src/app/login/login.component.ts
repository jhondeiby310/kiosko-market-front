import { Component, OnInit } from '@angular/core';
import { ApiServiceUser } from '../core/services/api-users.service';
import { Router, ActivatedRoute } from '@angular/router';
import Usuario from '../core/models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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

  crear() {
    this.apiService.crearUsuario(this.usuario).subscribe(res => this.router.navigateByUrl('/home'));
  }

  login() {
    this.apiService.login(this.usuario).subscribe(
      (res: any) => {
        if (res && res.correo) {
          if (res.correo === 'jhon@gmail.com') {
            this.router.navigateByUrl('/admin/productos');
          }
          else {
            this.router.navigateByUrl('/home');
          }
        }
      },
      err => console.error(err)
    );
  }
}
