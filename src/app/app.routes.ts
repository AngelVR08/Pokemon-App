import { Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent,  // Ruta principal: lista de Pokemones
  },
  {
    path: 'pokemon/:id',              // Ruta dinámica para los detalles del Pokémon
    component: PokemonDetailComponent,
  },
  {
    path: '**',                        // Ruta de error para URLs no válidas
    redirectTo: '',
    pathMatch: 'full'
  }
];

