// home.page.ts
import { Component } from '@angular/core';
import { PokeapiService } from './../Services/poke-apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  id: number = 0;
    name: string = '';
    img: string='';

    item: any
    pokemon:any
    pokemon1:any
    pokemon2:any
    pokemon3:any 
  pokemonId: number | null = null;
  pokemonName: string | null = null;
  pokemonDetails: any;

  constructor(private api: PokeapiService) {}

  getPokemonDataIDById() {
    try {
      if (this.pokemonId !== null) {
        this.api.getPokemonID(this.pokemonId).subscribe(response => {
          this.pokemonDetails = response;
          console.log(this.pokemonDetails);
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  getPokemonDataByName() {
    try {
      if (this.pokemonName !== null) {
        this.api.getPokemonName(this.pokemonName).subscribe(response => {
          this.pokemonDetails = response;
          console.log(this.pokemonDetails);
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  iditem=0
    getIDitem(iditem: number){
      try{
        this.api.getIDitem(iditem).subscribe(response => {
          this.item=response
          console.log(this.item)
          });
      } catch(error){
        console.log(error);
      }
    }
    item2:any ;
    nameitem=""
    getNameitem(nameitem: string) {
      try {
        this.api.getNameitem(nameitem).subscribe(response => {
          this.item2=response
          console.log(this.item2)
        });
      } catch (error) {
        console.log(error);
      }
    }

  }