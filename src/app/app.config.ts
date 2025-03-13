import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';


import localeES from '@angular/common/locales/es-MX';
import localeFR from '@angular/common/locales/fr';

registerLocaleData(localeES, 'es');
registerLocaleData(localeFR, 'fr');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    // Inyección del LOCALE_ID mediante un alias
    {
      provide: LOCALE_ID,
      useValue: 'es',
    },
  ]
};
