import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector   : 'app-id',
    standalone : true,
    imports    : [],
    templateUrl: './id.component.html',
    styleUrl   : './id.component.scss',
})
export class IdComponent implements OnInit {
    protected id: string = '';

    constructor (private readonly _route: ActivatedRoute) {

    }

    ngOnInit (): void {
        this._route.params.subscribe((params) => {
            this.id = params['id'];
        });
    }
}
