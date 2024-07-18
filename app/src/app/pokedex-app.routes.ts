import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailComponent } from './components/pokemon-detail.component';
import { PokedexAppComponent } from './pokedex-app.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path:  'home', component: PokedexAppComponent },
    { path: 'detail/:id', component: PokemonDetailComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }