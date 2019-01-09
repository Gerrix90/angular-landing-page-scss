import { Component, OnInit } from '@angular/core';
import { FeatureService } from '../services/feature.service';
import { Feature } from '../models/feature';

@Component({
	selector: 'app-feature',
	templateUrl: './feature.component.html'
})
export class FeatureComponent implements OnInit {
	public features: Feature[] = [];
	constructor(private featureService: FeatureService) {
		this.features = featureService.getFeatures();
	}
	ngOnInit() {}
}
