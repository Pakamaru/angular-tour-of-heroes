import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { Hero, heroes } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    const _heroes = of(heroes);
    return _heroes;
  }

  getHero(id: number): Hero | undefined {
    return heroes.find(hero => hero.id === id);
  }

  constructor() { }
}
