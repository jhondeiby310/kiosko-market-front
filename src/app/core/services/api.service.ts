import { Injectable } from '@angular/core';
import Categoria from '../models/categoria.model';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    categorias = [
        {
            nombre: 'Electronica',
            url: 'https://cdn.pixabay.com/photo/2015/06/24/15/45/ipad-820272_960_720.jpg'
        },
        {
            nombre: 'Video juegos',
            url: 'https://cdn.pixabay.com/photo/2014/05/03/00/50/video-controller-336657_960_720.jpg'
        }
    ]

    public obtenerCategorias(): Categoria[] {
        return this.categorias;
    }
}