import { Component, signal } from '@angular/core';
import { toggleCasePipe } from '../../pipes/toggle-case.pipe';

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
}
