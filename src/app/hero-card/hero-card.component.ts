import { Component, OnInit } from '@angular/core';
import { Hero, heroes } from '../hero';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {
  hero: Hero | undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    const heroIdFromRoute = Number(this.route.snapshot.paramMap.get('heroId'));

    this.hero = heroes.find(
      (hero) => hero.id === heroIdFromRoute
    );

    if (!this.hero) {
      this.router.navigate(['/heroes']);
    }
  }

}
