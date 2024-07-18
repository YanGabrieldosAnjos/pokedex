import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { provideRouter, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from "@angular/router";

import { AppRoutingModule, routes } from './pokedex-app.routes';
import { PokedexAppComponent } from "./pokedex-app.component";
import { PokemonService } from "./pokemon/pokemon.service";
import { provideHttpClient } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { PokemonDetailComponent } from "./components/pokemon-detail.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule, RouterOutlet, RouterLink, RouterLinkActive,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    PokemonService,
    provideHttpClient(),
    provideRouter(routes),
  ],
  declarations: [
    PokedexAppComponent,
    PokemonDetailComponent
  ],
  bootstrap: [PokedexAppComponent],
})
export class PokedexAppModule {}
