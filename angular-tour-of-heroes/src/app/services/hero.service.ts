import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Hero } from '../models/hero';
import { HEROES } from '../mock-heroes';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});
 
  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
  return this.http.get(this.heroesUrl)
             .toPromise()
             .then(response => response.json().data as Hero[])
             .catch(this.handleError);
}

  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError);
}

  update(hero:Hero): Promise<Hero>{
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  //note the return value
  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Hero)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
}


  //The best way to load data from backend is asynchronized
  //Promise make it happen
  // getHeroes(): Promise<Hero[]> {
  //   return Promise.resolve(HEROES);
  // }

  //synchronized way
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

	// getHero(id: number): Promise<Hero> {
	// 	return this.getHeroes()
	// 	.then(heroes => heroes.find(hero => hero.id === id));
	// }
}