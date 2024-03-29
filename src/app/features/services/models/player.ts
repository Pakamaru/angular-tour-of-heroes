import { Hero } from "./hero";

export interface Player {
    id: number;
    name: string;
    heroBag: HeroInstance[];
}

export interface HeroInstance {
    hero: Hero;
    level: number;
    experience: number;
}