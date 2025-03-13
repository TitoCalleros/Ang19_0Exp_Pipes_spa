import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html'
})
export default class BasicPageComponent {

  nameLower = signal('tito manuel');
  nameUpper = signal('TITO MANUEL');
  fullName = signal('tItO mANUeL');

  customDate = signal( new Date() );

  tickingDateEffect = effect((onCleanUp) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());

    }, 1000);

    // Función que permite limpiar el intervalo al salir de la página.
    onCleanUp(() => {
      clearInterval(interval);
    });
  });



}
