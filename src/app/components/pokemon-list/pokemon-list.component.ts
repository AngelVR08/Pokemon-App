import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';
import { Router, RouterModule } from '@angular/router';
import { ReplaceLettersPipe } from '../../pipes/replace-letters.pipe';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, RouterModule, ReplaceLettersPipe], // Aseguramos todas las importaciones
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  favorites: Set<number> = new Set();

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((data: any) => {
      this.pokemons = data.results;
    });
  }

  toggleFavorite(index: number): void {
    if (this.favorites.has(index)) {
      this.favorites.delete(index);
    } else {
      this.favorites.add(index);
    }
  }

  isFavorite(index: number): boolean {
    return this.favorites.has(index);
  }

  navigateToDetails(id: number): void {
    this.router.navigate(['/pokemon', id]);
  }
}
