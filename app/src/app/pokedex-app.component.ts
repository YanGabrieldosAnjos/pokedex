import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterOutlet } from '@angular/router';
import { PokemonService } from './pokemon/pokemon.service';
import { IPokedexList } from '../../../api/src/pokemon/interface/pokedex.interface';

@Component({
  selector: 'pokedex',
  templateUrl: './pokedex-app.component.html',
  styleUrl: './pokedex-app.component.scss'
})
export class PokedexAppComponent implements OnInit{
  pokemons: IPokedexList | null = null;
  filteredItems = [];
  constructor(private pokemonService: PokemonService, private router: Router) {}
  
  async ngOnInit(): Promise<void> {
    this.pokemons = await this.pokemonService.getList();
    console.log(this.pokemons);
  }

  async search(name?: string) {}
  async details(id: string) {}
}
