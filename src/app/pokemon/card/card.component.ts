import { Component } from '@angular/core';
import {CardService} from '../services/card-services'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent {
  name: string = "";
  imagen: string = "";

  constructor(private cardService : CardService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  search(){
    this.cardService.getPokemon(this.name).subscribe((data:any) => {
      this.imagen = data.sprites.front_defaul
    })
  }
}
