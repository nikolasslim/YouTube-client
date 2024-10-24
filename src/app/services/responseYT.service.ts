import {Injectable} from '@angular/core';
import {ISearchResponse} from "../search/search-response.model";
import jsonData from "../assets/responseData.json"


@Injectable({
	providedIn: 'root',
})
export class ResponseYTService {
	

	getLocalData(): ISearchResponse {
		return jsonData as ISearchResponse;
	}
}
