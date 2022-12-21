import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn : 'root'
})

export class CardService{
  private ulrAPI = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private http: HttpClient) {}

  getPokemon(name: string){
    return this.http.get(this.ulrAPI + name);
  }
}
