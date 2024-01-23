import { Component } from '@angular/core';
import { GiphyService } from './giphy.service';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  gifs: any[] = [];
  searchTerm = '';

  constructor(private giphyService: GiphyService) {}

  searchGifs() {
    this.giphyService.getGifs(this.searchTerm).subscribe(response => {
      if (Array.isArray(response)) {
        // Si la respuesta es un array, simplemente asigna la respuesta
        this.gifs = response as any[];
      } else if (response && 'data' in response) {
        // Si la respuesta es un objeto con una propiedad 'data', asigna esa propiedad
        this.gifs = response['data'] as any[];
      } else {
        // Maneja otros casos según sea necesario
        console.warn('Respuesta de la API no válida:', response);
      }
    });
  }
}

