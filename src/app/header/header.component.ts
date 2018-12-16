import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
	constructor() {}
	heading: string;
	subHeading: string;
	ngOnInit() {
		this.heading = 'Outdoors';
		this.subHeading = 'is where life happen';
	}
}
