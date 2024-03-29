import { Component, OnInit } from '@angular/core';
import { Hero } from '../../services/models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero: Hero | undefined;
  cardPositionX = 0;
  cardPositionY = 0;

  showDetails(hero: Hero, event: MouseEvent): void {
    this.selectedHero = hero;
    this.updateCardPosition_(event.clientX, event.clientY);
  }

  hideDetails(): void {
      this.selectedHero = undefined;
  }

  updateCardPosition(event: MouseEvent): void {
    this.updateCardPosition_(event.clientX, event.clientY);
  }

  updateCardPosition_(x: number, y: number) {
    this.cardPositionX = x;
    this.cardPositionY = y;
  }

  setHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.setHeroes();
  }

}
