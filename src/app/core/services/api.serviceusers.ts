import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Usuario from '../models/usuario.model';



@Injectable({
    providedIn: 'root',
})

export class ApiServiceUser {

    private HOST: string;
    private endPointUser = '/usuarios';
    private endPointLogin = '/login';

    constructor(private httpClient: HttpClient) {
        this.HOST = environment.hostApi;
    }

    public crearUsuario(usuario: Usuario){
        return this.httpClient.post(`${this.HOST}${this.endPointUser}`, usuario, {observe: 'body'})
    }

    public login(usuario:Usuario){
        return this.httpClient.post(`${this.HOST}${this.endPointLogin}`, usuario, {observe: 'body'})
    }
}