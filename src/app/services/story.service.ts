import { Injectable } from '@angular/core';
import { Story } from '../models/story';
import { stories } from '../../data/stories';

@Injectable({
	providedIn: 'root'
})
export class StoryService {
	private stories: Story[] = [];
	constructor() {
		stories.forEach((s) => {
			const story = new Story();
			Object.assign(story, s);
			this.stories.push(story);
		});
	}

	getStories(): Story[] {
		return this.stories;
	}
}
