import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { AvailableLocale, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html'
})
export default class BasicPageComponent {

  localeService = inject(LocaleService);

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

  // Llamado a la función que cambiar el locale_id
  changeLocale(locale: AvailableLocale): void {
    console.log({locale});

    this.localeService.changeLocale(locale);
  }

}
