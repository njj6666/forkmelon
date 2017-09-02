import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <!-- Router Configuration 3 -->
    <nav>
  		<a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
  		<a routerLink="/heroes" routerLinkActive="active">Heroes</a>
   	</nav>
    <!-- Router Configuration 4 -->
    <!-- router-outlet is like an anchor, both navigator will display here -->
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./css/app.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}