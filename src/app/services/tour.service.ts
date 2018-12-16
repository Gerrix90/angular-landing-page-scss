import { Injectable } from '@angular/core';
import { tours } from '../../data/tours';
import { Tour } from '../models/tour';

@Injectable({
	providedIn: 'root'
})
export class TourService {
	private tours: Tour[] = [];
	constructor() {
		tours.forEach((t) => {
			const tour = new Tour();
			Object.assign(tour, t);
			this.tours.push(tour);
		});
	}

	getTours(): Tour[] {
		return this.tours;
	}
}
