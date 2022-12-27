import { Action } from "rxjs/internal/scheduler/Action";
import { ANTERIOR, SIGUIENTE, actions } from "./pokemon.actions";

export function PokemonReducer(state:number = 10, action: actions){

  switch (action.type){

    case ANTERIOR:
      return state - 1;

    case SIGUIENTE:
      return state + 1;

      default:
        return state;

}

}
