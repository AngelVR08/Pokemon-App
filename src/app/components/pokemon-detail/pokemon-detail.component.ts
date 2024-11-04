// src/app/components/pokemon-detail/pokemon-detail.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service'; // Importación del servicio

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  pokemon: any; // Variable para almacenar los datos del Pokémon

  constructor(
    private route: ActivatedRoute,        // Inyección de ActivatedRoute
    private pokemonService: PokemonService // Inyección de PokemonService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Obtener el ID del parámetro de ruta
    if (id) {
      this.pokemonService.getPokemonDetails(id).subscribe((data: any) => {
        this.pokemon = data; // Asignar los datos del Pokémon a la variable
      });
    }
  }
}
