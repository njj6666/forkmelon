import { Injectable } from '@angular/core';

import { Hero } from '../models/hero';
import { HEROES } from '../mock-heroes';

@Injectable()
export class HeroService {
  //The best way to load data from backend is asynchronized
  //Promise make it happen
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  //synchronized way
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

	getHero(id: number): Promise<Hero> {
		return this.getHeroes()
		.then(heroes => heroes.find(hero => hero.id === id));
	}
}