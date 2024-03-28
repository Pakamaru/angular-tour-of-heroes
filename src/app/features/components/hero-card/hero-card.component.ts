import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {
  @Input() hero: Hero | undefined;

  ngOnInit(): void {
    
  }

}