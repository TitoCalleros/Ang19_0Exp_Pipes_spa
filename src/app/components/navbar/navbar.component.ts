import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  // También se puede extrayéndolos desde raíz:
  // routes = routes.map( ({title, path}) => ({
  //  title,
  //  path,
  // }));
  routes = routes.map( route => ({
    title: route.title ?? '',
    path: route.path ?? '',
  }));
 }
