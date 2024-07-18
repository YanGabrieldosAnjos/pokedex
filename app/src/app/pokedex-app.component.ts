import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PokemonService } from './pokemon/pokemon.service';
import { IPokedexList } from '../../../api/src/pokemon/interface/pokedex.interface';

@Component({
  selector: 'pokedex',
  templateUrl: './pokedex-app.component.html',
  styleUrl: './pokedex-app.component.scss'
})
export class PokedexAppComponent implements OnInit{
  pokemons: IPokedexList | null = null;
  name: string = ""
  constructor(private pokemonService: PokemonService, private router: Router) {}
  
  async ngOnInit(): Promise<void> {
    this.pokemons = await this.pokemonService.getList();
  }

  async list(url?: string) {
    const next = await this.pokemonService.getList(undefined, "/?"+ url?.split("?")[1]);
    const oldPokemons = this.pokemons?.results;
    this.pokemons = {
      ...next,
      results: [ ...oldPokemons!, ...next.results],
    }
  }

  async search(name: string) {
    const pokemon = await this.pokemonService.search(name);
    if(pokemon) {
      this.pokemons = {
        count: 0,
        next: this.pokemons?.next ?? "",
        previous: this.pokemons?.previous ?? "",
        results: [{...pokemon}]
      }
    }else {
      this.pokemons = await this.pokemonService.getList()
    }
  }
  async details(url: string) {
    const urlParts= url.split("/");
    const id = urlParts[urlParts.length-2];
    this.router.navigate(['/detail', id]);
  }
  
}
