import {Component} from '@angular/core';
import {NgClass} from "@angular/common";
import {CommonModule} from "@angular/common";


@Component({
	selector: 'app-header',
	standalone: true,
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
	imports: [
		NgClass, CommonModule,
	]
})
export class HeaderComponent {
	isActive = false;

	toggleClass() {
		this.isActive = !this.isActive;
	}


}

