import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';//Router Configuration 1

//components import
import { AppComponent }  from './app.component';
import { HeroDetailComponent }  from './components/hero-details.component';
import { HeroesComponent }  from './components/heroes.component';
import { DashboardComponent }  from './components/dashboard.component';

//service import
import { HeroService }  from './services/hero.service';

//module import
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    //Router Configuration 2
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
  ],
  //thus all components can use HeroService
  providers: [HeroService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/