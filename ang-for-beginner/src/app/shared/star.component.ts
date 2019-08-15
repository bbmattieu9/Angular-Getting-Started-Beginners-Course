import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';
@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

    // tslint:disable-next-line: no-inferrable-types
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> =
        new EventEmitter<string>();

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }

    ngOnChanges(): void {
        this.starWidth = this.rating * 70 / 5;
    }
}
