import { Component, OnInit } from '@angular/core';
import { Hero, heroes } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = heroes;
  
  constructor() { }

  ngOnInit(): void {
  }

}
