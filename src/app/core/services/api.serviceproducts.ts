import Producto from '../models/producto.model';
import { Injectable } from '@angular/core';



@Injectable({
    providedIn: 'root',
})

export class ApiServiceP{
     productos = [
        {   
            id:1,
            nombreProducto: 'reloj',
            url: 'https://cdn.pixabay.com/photo/2018/02/24/20/39/clock-3179167_960_720.jpg',
            descripcion: 'Hermoso mano',
            precio: 'Vale mucho'
        },
        {
            id:2,
            nombreProducto: 'Maquina de juegos',
            url: 'https://cdn.pixabay.com/photo/2013/09/06/20/50/pinball-179631_960_720.jpg',
            descripcion: 'Melo',
            precio: 'Barato bb'
        },
        {
            id:3,
            nombreProducto: 'Hermosa silla',
            url: 'https://cdn.pixabay.com/photo/2014/09/15/21/46/couch-447484_960_720.jpg',
            descripcion: 'para sentarse',
            precio: 'Escucho ofertas'
        },
        {
            id:4,
            nombreProducto: 'nuevo programa',
            url:'https://cdn.pixabay.com/photo/2018/09/04/10/36/smart-home-3653454_960_720.jpg',
            descripcion: 'Esta bacano',
            precio: 'Imbox'
        },
        {
            id: 5,
            nombreProducto: 'Halo',
            url: 'https://cdn.pixabay.com/photo/2020/01/10/14/18/war-4755403_960_720.jpg',
            descripcion: 'Corre full graficos',
            precio: 'Mil pesos'
        },
        {
            id: 6,
            nombreProducto: 'Libros buenos',
            url: 'https://cdn.pixabay.com/photo/2016/03/09/15/29/books-1246674_960_720.jpg',
            descripcion: 'Varios libros',
            precio: 'negociable'
        }
    ]

    public obtenerProductosCategoria(): Producto[] {
        return this.productos;
    }
}