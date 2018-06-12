import { Component } from '@angular/core';
import { Item } from './Models/Item';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	items: Item[] = [];

	constructor() {
		this.items.push(
			{
				name: 'Widget',
				quantity: 2,
				price: 5
			},
			{
				name: 'Cog',
				quantity: 2,
				price: 15.994
			}
		);
	}

	removeItem(index: number): void {
		this.items.splice(index, 1);
	}
}
