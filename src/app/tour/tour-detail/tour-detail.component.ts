import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-tour-detail',
	templateUrl: './tour-detail.component.html',
	styleUrls: [ './tour-detail.component.css' ]
})
export class TourDetailComponent implements OnInit {
	@Input() details: any;

	constructor() {}

	ngOnInit() {}
}
