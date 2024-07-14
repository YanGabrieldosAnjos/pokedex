import { Controller, Get, Param, Query } from "@nestjs/common";
import { PokemonService } from "./pokemon.service";

@Controller('pokemon')
export class PokemonController {
    constructor(private pokemonService: PokemonService) {}

    @Get()
    async list(
        @Query() pagination?: {limit: number, offset: number} 
    ) {
        return this.pokemonService.list( pagination);
    }
    
    @Get('search')
    async query(
        @Query("name") name: string
    ) {
        return this.pokemonService.query(name);
    }

    @Get(':id')
    async details(@Param("id") id: string) {
        return this.pokemonService.getDetails(id);
    }
    

}
