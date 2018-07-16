import { OnInit, EventEmitter } from '@angular/core';
export declare class ShowPictureComponent implements OnInit {
    pictureUrl: string;
    update: EventEmitter<{
        status: boolean;
    }>;
    constructor();
    ngOnInit(): void;
    closeModel(): void;
}
