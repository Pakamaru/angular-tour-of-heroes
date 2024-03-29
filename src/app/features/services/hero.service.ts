import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Hero, heroes } from './models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';

  getHeroes(): Observable<Hero[]> {
    this.log('fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Hero | undefined {
    return heroes.find(hero => hero.id === id);
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  constructor(private messageService: MessageService, private http: HttpClient) { }
}
