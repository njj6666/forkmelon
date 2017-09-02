import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../models/hero';

//inject a service - 1/3. import
import { HeroService } from '../services/hero.service';

//call service method - 1/3. Import OnInit event.
import { OnInit } from '@angular/core';



@Component({
  selector: 'hero-list',
  templateUrl: '../templates/heroes.html',
  styleUrls: ['../css/heroes.css'],
  //inject a service - 2/3. declare providers.
  //provider here can only used by this component, you can promote it in app.module, thus all components can use the service.
  //providers: [HeroService]
})
//call service method - 2/3. implements OnInit.
export class HeroesComponent implements OnInit{
  title = 'Tour of Heroes';
  heroes: Hero[]; //assume that we get heroes from database
  selectedHero: Hero;

  //inject a service - 3/3. constructor injector
  constructor(private heroService: HeroService,
    private router: Router) { }

  //you can get data via 'heroes = this.heroService.getHeroes()'' directly
  //if you get data within a methond, you need to conside when to invoke the method
  //In this demo, invoke it in init hook
  getHeroes(): void {
    //due to service.getHeroes() is an asynchronized method
    //you need to call then() which is a callback methond to populate data get from backend.
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  //call service method - 3/3. implements OnInit callback method.
  ngOnInit(): void {
    this.getHeroes()
  }

  gotoDetail(): void{
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void{
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero:Hero): void{
    this.heroService.delete(hero.id).then(()=>{
      this.heroes = this.heroes.filter(h => h !== hero);
      if (this.selectedHero === hero) { this.selectedHero = null; }
    })
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/