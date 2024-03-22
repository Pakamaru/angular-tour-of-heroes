import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 0,
    name: 'paladin',
    description: 'A supportive/tank hero that can heal and protect allies.',
    damage: 0,
    health: 0,
    level: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

}
