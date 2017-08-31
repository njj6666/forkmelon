import { Component } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './models/hero';

//inject a service - 1/3. import
import { HeroService } from './services/hero.service';

//call service method - 1/3. Import OnInit event.
import { OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './templates/app.html',
  styleUrls: ['./css/app.css'],
  //inject a service - 2/3. declare providers
  providers: [HeroService]
})
//call service method - 2/3. implements OnInit.
export class AppComponent implements OnInit{
  title = 'Tour of Heroes';
  heroes: Hero[]; //assume that we get heroes from database
  selectedHero: Hero;

  //inject a service - 3/3. constructor injector
  constructor(private heroService: HeroService) { }

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
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/