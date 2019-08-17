import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<nav class="nav navbar-expand navbar-light bg-light">
  <a class="navbar-brand">{{ pageTitle }}</a>
  <ul class="nav nav-pills">
    <li><a class="nav-link" [routerLink]="['/welcome']">Home</a></li>
    <li><a class="nav-link" [routerLink]="['/products']">Product List</a></li>
  </ul>
  </nav>
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {
  pageTitle = 'Angular8: Getting Started';
}
