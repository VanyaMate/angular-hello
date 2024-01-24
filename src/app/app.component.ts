import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from './entities/product-card/product-card.component';
import { NgForOf } from '@angular/common';
import {
    ProductAddToCartComponent,
} from './features/product-add-to-cart/product-add-to-cart.component';
import {
    ProductCardComponent as ProductCartComponent,
} from './features/product-card/product-card.component';


@Component({
    selector   : 'app-root',
    standalone : true,
    imports    : [ RouterOutlet, ProductCardComponent, NgForOf, ProductAddToCartComponent, ProductCartComponent ],
    templateUrl: './app.component.html',
    styleUrl   : './app.component.scss',
})
export class AppComponent {
    products: { title: string, description: string, date: string }[] = [
        {
            title: 'Product 1', description: 'Product description', date: '10 min',
        },
        {
            title: 'Product 2', description: 'Product description', date: '15 min',
        },
        {
            title: 'Product 3', description: 'Product description', date: '32 min',
        },
        {
            title: 'Product 4', description: 'Product description', date: '54 min',
        },
    ];
}
