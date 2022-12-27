import { Component } from '@angular/core';
import { Store, Action} from '@ngrx/store';
import { DecrementarAction, IncrementarAction } from './contador/contador.actions';
import { ModelPokemon } from './pokemon/models/pokemon.models';
import { CardService } from './pokemon/services/card-services';
import { TemplateBindingParseResult } from '@angular/compiler';
import { tap } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'redux-app';
  contador: number;
  pokemon!: ModelPokemon;

  constructor(private producSvc: CardService){
    //this.store.select('contador')
    //.subscribe(contador => this.contador = contador);
    this.contador = 1;
  }

  incrementar() {
    //const accion = new IncrementarAction();
    //this.store.dispatch(accion);
    this.contador++;
    this.producSvc.getPokemonCard(this.contador).pipe(tap((pokemon:ModelPokemon)=>this.pokemon = pokemon)).subscribe();
  }

  decrementar() {
   // const accion = new DecrementarAction();
    //this.store.dispatch(accion);
    this.contador--;
    this.producSvc.getPokemonCard(this.contador).pipe(tap((pokemon:ModelPokemon)=>this.pokemon = pokemon)).subscribe();

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.producSvc.getPokemonCard(this.contador).pipe(tap((pokemon:ModelPokemon)=>this.pokemon = pokemon)).subscribe();

  }
}
