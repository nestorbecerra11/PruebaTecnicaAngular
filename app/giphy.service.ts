import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  private apiKey = '29cjPh4a6sX1AYFu2NZwdoLnn5k51Ipl'; // Reemplaza con tu API key
  private apiUrl = 'https://api.giphy.com/v1/gifs/search';

  constructor(private http: HttpClient) {}

  getGifs(searchTerm: string): Observable<any[]> {
    const url = `${this.apiUrl}?api_key=${this.apiKey}&q=${searchTerm}`;
    return this.http.get<any[]>(url);
  }
}

