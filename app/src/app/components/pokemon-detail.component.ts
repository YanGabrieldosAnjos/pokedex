import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon/pokemon.service';
import { IPokemon } from '../../../../api/src/pokemon/interface/pokemon.interface';

@Component({
  selector: 'pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  pokemon: IPokemon | null = null;
  showList: boolean;
  showType: boolean;
  selectedItem: string | null;
  tooltipVisible: boolean;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) { 
    this.showList = false;
    this.showType =false;
    this.selectedItem = "";
    this.tooltipVisible = false;
  }

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.paramMap.get("id") ?? "";
    this.pokemon = await this.pokemonService.detail(id);
  }


  toggleList(): void {
    this.showList = !this.showList;
  }
  toggleType(): void {
    this.showType = !this.showType;
  }
  async selectItem(moveUrl: string) {
    const match = moveUrl.match(/\/(\d+)\/?$/);
    const moveDetail = await this.pokemonService.moveDetail(match ? match[1] : '');
    this.selectedItem = moveDetail?.effect;
    this.tooltipVisible = true;
  }

  clearSelection(): void {
    this.selectedItem = null;
    this.tooltipVisible = false;
  }

  hideTooltip(): void {
    this.tooltipVisible = false;
  }

  goBack(): void {
    window.history.back();
  }
}