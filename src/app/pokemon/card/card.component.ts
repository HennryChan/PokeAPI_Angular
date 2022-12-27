import { Component, EventEmitter, Input, OnInit, Output,ChangeDetectionStrategy } from '@angular/core';
import { ModelPokemon } from '../models/pokemon.models';
import { CardService } from '../services/card-services';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
  ]
})
export class CardComponent implements OnInit {
  @Input ()character!: ModelPokemon;
  @Output ()adition = new EventEmitter<ModelPokemon>();

  ngOnInit(): void {
  }

  onClick():void{
    this.adition.emit(this.character)
  }

}
