import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  apiKey = '29cjPh4a6sX1AYFu2NZwdoLnn5k51Ipl';
  apiUrl = 'https://api.giphy.com/v1/randomid';

  constructor(private http: HttpClient) { }

    getGifs(searchTerm: string) {  
    const url = `${this.apiUrl}?api_key=${this.apiKey}&q=${searchTerm}`;
    return this.http.get(url);
  }

}


