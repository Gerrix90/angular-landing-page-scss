import { Injectable } from '@angular/core';
import { Feature } from '../models/feature';
import { features } from '../../data/features';

@Injectable({
	providedIn: 'root'
})
export class FeatureService {
	private features: Feature[] = [];
	constructor() {
		features.forEach((fe) => {
			const feature = new Feature();
			Object.assign(feature, fe);
			this.features.push(feature);
		});
	}

	getFeatures(): Feature[] {
		return this.features;
	}
}
