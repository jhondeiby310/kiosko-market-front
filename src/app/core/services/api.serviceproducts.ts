import Producto from '../models/producto.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
    providedIn: 'root',
})

export class ApiServiceP{
    
    private HOST: string;
    private endPointProductos = '/productos';

    constructor(private httpClient: HttpClient){
        this.HOST = environment.hostApi;
    }


    public obtenerProductosCategoria() {
        return this.httpClient.get(`${this.HOST}${this.endPointProductos}`, {observe: 'body'})
    }
}