import { Component, Input } from '@angular/core';


@Component({
    selector   : 'app-product-add-to-cart',
    standalone : true,
    imports    : [],
    templateUrl: './product-add-to-cart.component.html',
    styleUrl   : './product-add-to-cart.component.scss',
})
export class ProductAddToCartComponent {
    @Input() id: string | undefined;

    protected addToCart (): void {
        console.log(this.id);
    }
}
