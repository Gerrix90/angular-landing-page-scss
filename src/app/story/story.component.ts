import { Component, OnInit } from '@angular/core';
import { StoryService } from '../services/story.service';
import { Story } from '../models/story';

@Component({
	selector: 'app-story',
	templateUrl: './story.component.html',
	styleUrls: [ './story.component.css' ]
})
export class StoryComponent implements OnInit {
	private stories: Story[] = [];
	constructor(private storyService: StoryService) {
		this.stories = storyService.getStories();
	}
	ngOnInit() {}
}
