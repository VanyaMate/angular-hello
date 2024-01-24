import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';


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
    public pending: boolean  = false;
    public items: CartItem[] = [];

    /**
     * А так нельзя оказывается о.о упс
     * @param {string} id
     * @param {number} amount
     * @returns {Promise<unknown>}
     */
    public async addToCart (id: string, amount: number) {
        return new Promise((resolve) => {
            this.pending = true;
            setTimeout(() => {
                this.items.map((item) => {
                    if (item.id === id) {
                        item.amount += amount;
                    }
                    return item;
                });
                this.pending = false;
                resolve(true);
            }, 1000);
        });
    }
}
