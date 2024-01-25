import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { ProductCart } from './product-cart.service';


export type CartItem = {
    id: string;
    amount: number;
}

@Component({
    selector   : 'app-product-cart',
    standalone : true,
    imports    : [
        NgForOf,
    ],
    templateUrl: './product-card.component.html',
    styleUrl   : './product-card.component.scss',
})
export class ProductCardComponent {
    constructor (protected readonly _cart: ProductCart) {
    }
}
