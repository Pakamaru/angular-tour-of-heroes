import { Component, Input, OnInit } from '@angular/core';
import { Hero, heroes } from '../hero';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-editor',
  templateUrl: './hero-editor.component.html',
  styleUrls: ['./hero-editor.component.css']
})
export class HeroEditorComponent implements OnInit {
  hero: Hero | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const heroIdFromRoute = Number(routeParams.get('heroId'));

    this.hero = heroes.find(
      (hero) => hero.id === heroIdFromRoute
    );
  }

}
