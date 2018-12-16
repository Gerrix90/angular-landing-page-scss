import { Component, OnInit } from '@angular/core';
import { TourService } from '../services/tour.service';
import { Tour } from '../models/tour';

@Component({
	selector: 'app-tour',
	templateUrl: './tour.component.html'
})
export class TourComponent implements OnInit {
	private tours: Tour[];
	constructor(private tourService: TourService) {
		this.tours = tourService.getTours();
	}

	ngOnInit() {}
}
