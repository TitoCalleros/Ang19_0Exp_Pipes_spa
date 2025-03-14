import { Component, signal } from '@angular/core';

import { ColorMap, Hero } from '../../interfaces/hero.interface';
import { heroes } from '../../data/heroes.data';

import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';
import { HeroSortByPipe } from '../../pipes/hero-sort-by.pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-custom-page',
  imports: [
    CanFlyPipe,
    HeroColorPipe,
    HeroCreatorPipe,
    HeroSortByPipe,
    HeroTextColorPipe,
    TitleCasePipe,
    ToggleCasePipe,
  ],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal('Tito Manuel Calleros');

  upperCase = signal(true);

  heroes = signal<Hero[]>(heroes);

  sortBy = signal<keyof(Hero) | null>(null);
}
