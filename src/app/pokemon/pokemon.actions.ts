import { Action } from "@ngrx/store";

export const ANTERIOR = '[Contador] Anterior';
export const SIGUIENTE = '[Contador] Siguiente';


export class AnteriorAction implements Action {
  readonly type = ANTERIOR;

}

export class SiguienteAction implements Action {
  readonly type = SIGUIENTE;
}

export type actions = AnteriorAction | SiguienteAction;
