import Producto from '../models/producto.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders} from '@angular/common/http';



@Injectable({
    providedIn: 'root',
})
export class ApiServiceP {

    private HOST: string;
    private endPointCategoriaProductos = '/categorias/productos';
    private endPointProductos = '/productos';
    private endPointCompra = '/comprar';

    constructor(private httpClient: HttpClient) {
        this.HOST = environment.hostApi;
    }

    public obtenerProductosCategoria(id: number) {
        return this.httpClient.get(`${this.HOST}${this.endPointCategoriaProductos}/${id}`, {observe: 'body'});
    }

    public obtenerProductos() {
        return this.httpClient.get(`${this.HOST}${this.endPointProductos}`, {observe: 'body'});
    }

    public getProducto(id: number) {
        return this.httpClient.get(`${this.HOST}${this.endPointProductos}/${id}`, {observe: 'body'});
    }

    public crearProducto(producto: Producto) {
        return this.httpClient.post(`${this.HOST}${this.endPointProductos}`, producto, {observe: 'body'});
    }

    public eliminarProducto(id: number) {
        const header = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
        return this.httpClient.delete(`${this.HOST}${this.endPointProductos}/${id}`, {observe: 'body',
        headers: header,
        withCredentials: true});
    }

    public actualizarProducto(producto: Producto) {
        return this.httpClient.put(`${this.HOST}${this.endPointProductos}`, producto, {observe: 'body'});
    }

    public obtenerProductocompra(codigo: number) {
        return this.httpClient.get(`${this.HOST}${this.endPointCompra}/${codigo}`, {observe: 'body'});
    }
}