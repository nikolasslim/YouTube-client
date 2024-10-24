import {Component, OnInit} from '@angular/core';
import {ResponseYTService} from '../../services/responseYT.service';
import {ISearchResponse} from '../search-response.model';

@Component({
	selector: 'app-search-item',
	templateUrl: './search-item.component.html',
	styleUrl: './search-item.component.scss'
})
export class SearchItemComponent implements OnInit {
	public responseData: ISearchResponse | undefined;

	constructor(private responseYTService: ResponseYTService) {
	}

	ngOnInit(): void {
		this.responseData = this.responseYTService.getLocalData()
		//console.log(this.responseData)
	}
}