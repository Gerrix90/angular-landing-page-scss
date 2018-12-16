import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-footer-item',
	templateUrl: './footer-item.component.html',
	styleUrls: [ './footer-item.component.css' ]
})
export class FooterItemComponent implements OnInit {
	private footerList: string[];
	constructor() {
		this.footerList = [ 'Company', 'Contact us', 'Careers', 'Privacy policy', 'Terms' ];
	}

	ngOnInit() {}
}
