import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { ModelPokemon } from '../models/pokemon.models';

@Injectable({
  providedIn : 'root'
})

export class CardService{
  private ulrAPI = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private http: HttpClient) { }

    getPokemonCard(count: Number):Observable<ModelPokemon>{
      return this.http.get<ModelPokemon>(`${this.ulrAPI + count}`);
    }
  }

