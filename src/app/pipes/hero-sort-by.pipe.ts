import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroSortBy'
})

export class HeroSortByPipe implements PipeTransform {
  transform(value: Hero[], sortBy: keyof(Hero) | null): Hero[] {
    console.log(sortBy);

    switch (sortBy) {
      case 'canFly':
        return value.sort( (a, b) => (a.canFly ? 1 : -1) - (b.canFly ? 1 : -1));

      case 'creator':
        return value.sort( (a, b) => a.creator - b.creator );

      case 'name':
        return value.sort( (a, b) => a.name.localeCompare(b.name) );

      case 'color':
        return value.sort( (a, b) => a.color - b.color );

      default:
        return value;
    }
  }
}
