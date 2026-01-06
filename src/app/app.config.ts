import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes, withInMemoryScrolling({
        scrollPositionRestoration: 'enabled', // 👈 restore scroll on back/forward
        anchorScrolling: 'enabled',           // 👈 support for #anchor links
      })),
    provideHttpClient()]
};
