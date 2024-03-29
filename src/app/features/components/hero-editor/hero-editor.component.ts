import { Component, Input, OnInit } from '@angular/core';
import { Hero, heroes } from '../../services/models/hero';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hero-editor',
  templateUrl: './hero-editor.component.html',
  styleUrls: ['./hero-editor.component.css']
})
export class HeroEditorComponent implements OnInit {
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
