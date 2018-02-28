import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Album {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  albums: any = [];

  constructor(private http: HttpClient) {
    this.http.get<Album[]>('https://jsonplaceholder.typicode.com/photos').subscribe(data => {
     this.albums = data
     .reduce((pv: any[], album) => {
       if(!pv[album.albumId]) {
        pv[album.albumId] = [];
       };
       pv[album.albumId][album.id] = {title: album.title, url: album.url, thumbnailUrl: album.thumbnailUrl};
       return pv;
     }, [])
     .slice(-3)
     .map(album => album.slice(-2));
    });
  }
}
