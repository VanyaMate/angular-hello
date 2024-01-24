import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';


@Component({
    selector   : 'app-product-add-to-cart',
    standalone : true,
    imports    : [
        NgClass, ProductCardComponent,
    ],
    templateUrl: './product-add-to-cart.component.html',
    styleUrl   : './product-add-to-cart.component.scss',
})
export class ProductAddToCartComponent {
    constructor (
        private readonly productCart: ProductCardComponent,
    ) {
    }

    @Input() id: string | undefined;

    protected pending: boolean = false;

    protected addToCart (): void {
        console.log('add to cart');
        this.pending = true;
        this.productCart
            .addToCart(this.id!, 1)
            .finally(() => this.pending = false);
    }
}
