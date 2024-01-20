// app.component.ts
import { Component } from '@angular/core';
import { GiphyService } from './giphy.service';
import { Gif } from './gif';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchTerm: string = ''; // Agrega esta línea
  gifs: Gif[] = [];

  constructor(private giphyService: GiphyService) {}


  onSearch(query: string) {
    this.giphyService.getGifs(query).subscribe((gifs: Gif[]) => { 
      this.gifs = gifs;
    });
  }
}

