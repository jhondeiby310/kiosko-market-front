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
        },
        {
            nombre: 'Libros',
            url: 'https://cdn.pixabay.com/photo/2016/03/27/19/32/blur-1283865_960_720.jpg'
        },
        {
            nombre: 'Software',
            url: 'https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg'
        },
        {
            nombre: 'Muebles',
            url: 'https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_960_720.jpg'
        },
        {
            nombre: 'Accesorios',
            url: 'https://cdn.pixabay.com/photo/2014/05/03/00/46/gadgets-336635_960_720.jpg'
        }
    ]

    public obtenerCategorias(): Categoria[] {
        return this.categorias;
    }
}