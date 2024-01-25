import { Injectable } from '@angular/core';


export type CartItem = {
    id: string;
    amount: number;
};

@Injectable({
    providedIn: 'root',
})
export class ProductCart {
    public pending: boolean  = false;
    public items: CartItem[] = [];

    public addToCart (id: string, amount: number): Promise<number> {
        return new Promise((resolve) => {
            this.pending = true;
            setTimeout(() => {
                for (let i = 0; i < this.items.length; i++) {
                    const item = this.items[i];
                    if (item.id === id) {
                        item.amount += amount;
                        this.pending = false;
                        resolve(item.amount);
                        return;
                    }
                }
                this.items.push({ id, amount });
                this.pending = false;
                resolve(amount);
            }, 1000);
        });
    }
}