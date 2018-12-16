import { Component, OnInit, Input } from '@angular/core';
import { Story } from 'src/app/models/story';

@Component({
	selector: 'app-story-detail',
	templateUrl: './story-detail.component.html',
	styleUrls: [ './story-detail.component.css' ]
})
export class StoryDetailComponent implements OnInit {
	@Input() stories: Story[];
	constructor() {}

	ngOnInit() {}
}
