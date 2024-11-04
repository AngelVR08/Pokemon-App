// src/app/services/pokemon.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  // Obtener lista de Pokémon
  getPokemons(limit: number = 15): Observable<any> {
    return this.http.get(`${this.apiUrl}?limit=${limit}`);
  }

  // Obtener detalles de un Pokémon específico por ID
  getPokemonDetails(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
