import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { FeatureComponent } from './feature/feature.component';
import { TourComponent } from './tour/tour.component';

import { FeatureService } from './services/feature.service';
import { TourService } from './services/tour.service';
import { TourDetailComponent } from './tour/tour-detail/tour-detail.component';
import { StoryComponent } from './story/story.component';
import { StoryDetailComponent } from './story/story-detail/story-detail.component';
import { StoryService } from './services/story.service';
import { BookingComponent } from './booking/booking.component';
import { FooterComponent } from './footer/footer.component';
import { FooterItemComponent } from './footer/footer-item/footer-item.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PopupComponent } from './popup/popup.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		AboutComponent,
		FeatureComponent,
		TourComponent,
		TourDetailComponent,
		StoryComponent,
		StoryDetailComponent,
		BookingComponent,
		FooterComponent,
		FooterItemComponent,
		NavigationComponent,
		PopupComponent
	],
	imports: [ BrowserModule, AppRoutingModule ],
	providers: [ FeatureService, TourService, StoryService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
