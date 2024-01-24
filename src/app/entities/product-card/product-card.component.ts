import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';


export type Product = { title: string, description: string, date: string };

@Component({
    selector   : 'app-product-card',
    standalone : true,
    imports: [
        NgIf,
    ],
    templateUrl: './product-card.component.html',
    styleUrl   : './product-card.component.scss',
})
export class ProductCardComponent {
    @Input() product: Product | undefined;
}
