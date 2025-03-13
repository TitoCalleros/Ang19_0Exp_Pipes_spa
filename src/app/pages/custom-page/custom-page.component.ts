import { Component, signal } from '@angular/core';
import { toggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';

@Component({
  selector: 'app-custom-page',
  imports: [
    toggleCasePipe
  ],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal('Tito Manuel Calleros');

  upperCase = signal(true);

  heroes = signal(heroes);
}
