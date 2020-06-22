import { Injectable } from '@angular/core';
import Categoria from '../models/categoria.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root',
})
export class ApiService {

    private HOST: string;
    private endPointCategorias = '/categorias';

    constructor(private httpClient: HttpClient) {
        this.HOST = environment.hostApi;
     }

    public obtenerCategorias() {
        return this.httpClient.get(`${this.HOST}${this.endPointCategorias}`, {observe: 'body'});
    }

    public eliminarCategoria(id: number) {
        return this.httpClient.delete(`${this.HOST}${this.endPointCategorias}/${id}`, {observe: 'body'});
    }

    public actualizarCategoria(categoria: Categoria) {
        return this.httpClient.put(`${this.HOST}${this.endPointCategorias}`, categoria, {observe: 'body'})
    }

    public getCategoria(id: number) {
        return this.httpClient.get(`${this.HOST}${this.endPointCategorias}/${id}`, {observe: 'body'});
    }

    public crearCategoria(categoria: Categoria) {
        return this.httpClient.post(`${this.HOST}${this.endPointCategorias}`, categoria, {observe: 'body'});
    }
}



