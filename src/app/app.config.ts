import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { registerLocaleData} from "@angular/common";

import localeES from '@angular/common/locales/es-AR'
import localeFR from '@angular/common/locales/fr'
import { LocaleService } from './services/locale.service';

registerLocaleData(localeES, 'es' );
registerLocaleData(localeFR, 'fr' );

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
  {
    provide: LOCALE_ID,
    // useValue: 'fr',
    deps: [LocaleService],
    useFactory: (localeService: LocaleService) => localeService.getLocale,
  },
  ]
};
