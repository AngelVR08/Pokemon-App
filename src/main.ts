import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; // Importa las rutas

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Habilita el módulo de cliente HTTP
    provideRouter(routes), // Proporciona las rutas definidas
  ],
}).catch(err => console.error(err));
