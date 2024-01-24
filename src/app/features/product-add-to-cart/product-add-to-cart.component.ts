import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';


@Component({
    selector   : 'app-product-add-to-cart',
    standalone : true,
    imports    : [
        NgClass,
    ],
    templateUrl: './product-add-to-cart.component.html',
    styleUrl   : './product-add-to-cart.component.scss',
})
export class ProductAddToCartComponent {
    @Input() id: string | undefined;

    protected pending: boolean = false;

    protected addToCart (): void {
        this.pending = true;
        setTimeout(() => {
            this.pending = false;
        }, 1000);
    }
}
