import { Type } from "@angular/core";
import { Sprite } from "./spites.models";

export interface ModelPokemon{
  id : number
  name: string
  sprites: Sprite
  base_experience: number
  height: number
  weight: number
  order: number
}

