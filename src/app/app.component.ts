import { Component } from '@angular/core';
import { Item } from './Models/Item';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

const TAX_PERCENTAGE: number = 0.05;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	form: FormGroup;
	items: Item[] = [];

	constructor(private _fb: FormBuilder) {
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

		this.bindForm();
	}

	bindForm(): void {
		this.form = this._fb.group({
			'name': ['', [Validators.required, Validators.pattern('([A-Z|a-z|Á-Ú|á-ú|.|-]+[ ]?)*')]],
			'quantity': [0, [Validators.required, Validators.min(1), Validators.pattern('[0-9]+')]],
			'price': [0, [Validators.required, Validators.pattern('[0-9]+([.]{1}[0-9]+){0,1}')]]
		});
	}

	removeItem(index: number): void {
		this.items.splice(index, 1);
	}

	addItem(): void {
		if (this.form.valid) {
			let item = this.form.value;
			this.form.reset();
			this.items.push(item);
		} else {
			alert('This item cannot be added. Please make sure all the information is correct.');
		}
	}

	getSubtotal(): number {
		let subtotal = 0;

		this.items.forEach(item=>subtotal += item.price * item.quantity);

		if (this.form.get('quantity').valid && this.form.get('price').valid) {
			subtotal += this.form.get('quantity').value * this.form.get('price').value;
		}

		return subtotal;
	}

	getTaxes(): number {
		return this.getSubtotal() * TAX_PERCENTAGE;
	}

	getTotal(): number {
		return this.getSubtotal() + this.getTaxes();
	}
}
