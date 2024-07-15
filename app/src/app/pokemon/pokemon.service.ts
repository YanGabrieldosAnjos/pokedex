import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom, Observable } from "rxjs";
import { IPokedex, IPokedexList } from "../../../../api/src/pokemon/interface/pokedex.interface";

@Injectable({
    providedIn: 'root',
})
export class PokemonService {
    private apiUrl = 'http://localhost:3000/api';
    constructor(private client: HttpClient) {}

    async getList(pagination?: {limit: number, offset: number}, url?: string): Promise<IPokedexList> {
        let query = this.apiUrl+ "/pokemon";
        if(pagination) {
            query += `/?limit=${pagination.limit}&offset=${pagination.offset}`
        }
        if(url) {
            query += url;
        }
        return (await lastValueFrom(this.client.get<IPokedexList>(query)));
    }

    async search(name: string) {
        return (await lastValueFrom(this.client.get<IPokedex>(`${this.apiUrl}/pokemon/search?name=${name}`)));
    }
}
