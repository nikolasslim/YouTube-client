import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {SearchResultsComponent} from './search/search-results/search-results.component';
import {SearchItemComponent} from './search/search-item/search-item.component';
import {provideHttpClient, withFetch} from "@angular/common/http";
import {NgOptimizedImage} from "@angular/common";


@NgModule({
	bootstrap: [AppComponent],
	declarations: [
		AppComponent,
		SearchResultsComponent,
		SearchItemComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HeaderComponent,
		NgOptimizedImage,


	],
	providers: [
		provideClientHydration(),
		provideHttpClient(withFetch())
	]
})
export class AppModule {
}
