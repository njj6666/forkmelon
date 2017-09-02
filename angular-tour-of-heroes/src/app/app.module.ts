import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';//Router Configuration 1
import { HttpModule }    from '@angular/http';

//components import
import { AppComponent }  from './app.component';
import { HeroDetailComponent }  from './components/hero-details.component';
import { HeroesComponent }  from './components/heroes.component';
import { DashboardComponent }  from './components/dashboard.component';
import { HeroSearchComponent} from './components/hero-search.component';

//service import
import { HeroService }  from './services/hero.service';
import { HeroSearchService } from './services/hero-search.service'

//module import
import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    //Router Configuration 2
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent,
  ],
  //thus all components can use HeroService
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/