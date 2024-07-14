import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { IPokedexList } from "./interface/pokedex.interface";
import { IPokemon } from "./interface/pokemon.interface";
import { lastValueFrom } from "rxjs";

@Injectable()
export class PokemonService {
    private readonly baseUrl = "https://pokeapi.co/api/v2/pokemon";
    constructor(private readonly httpService: HttpService) {}
    async list(pagination?: {limit: number, offset: number}, ) {
        const listUrl = pagination ? 
        `${this.baseUrl}/?offset=${pagination.offset}&limit=${pagination.limit}`
        : this.baseUrl;
        return (await lastValueFrom(this.httpService.get<IPokedexList[]>(listUrl ?? this.baseUrl))).data;
    }

    async query(name: string) {
        return (await lastValueFrom(this.httpService.get<Pick<IPokemon, 'species'>>(`${this.baseUrl}/${name}`))).data.species;
    }

    async getDetails(id: string): Promise<IPokemon> {
        let {data} = await lastValueFrom(this.httpService.get<IPokemon>(`${this.baseUrl}/${id}`));

        return {
            abilities: data.abilities.map(({ability, is_hidden, slot}) => ({ability, is_hidden, slot})),
            base_experience: data.base_experience,
            height: data.height,
            id: data.id,
            is_default: data.is_default,
            location_area_encounters: data.location_area_encounters,
            moves: data.moves.map(({move}) => ({move: {name: move.name, url: move.url}})),
            name: data.name,
            order: data.order,
            species: {name: data.species.name, url: data.species.url},
            sprites: {back_default: data.sprites.back_default, front_default: data.sprites.front_default},
            stats: data.stats.map(({stat, base_stat, effort}) => ({base_stat, effort, stat: {name: stat.name, url: stat.url}}) ),
            types: data.types.map(({slot, type}) => ({slot, type: {name: type.name, url: type.url}})),
            weight: data.weight,
        };
    }

}
