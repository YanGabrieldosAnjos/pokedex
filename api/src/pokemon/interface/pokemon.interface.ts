export interface IPokemon {
    abilities:                Ability[];
    base_experience:          number;
    height:                   number;
    id:                       number;
    is_default:               boolean;
    location_area_encounters: string;
    moves:                    Move[];
    name:                     string;
    order:                    number;
    species:                  Base;
    sprites:                  Sprites;
    stats:                    Stat[];
    types:                    Type[];
    weight:                   number;
}
export interface Ability {
    ability:   Base;
    is_hidden: boolean;
    slot:      number;
}

export interface Base {
    name: string;
    url:  string;
}

export interface Stat {
    base_stat: number;
    effort:    number;
    stat:      Base;
}

export interface Type {
    slot: number;
    type: Base;
}

export interface Move {
    move: Base;
}

export interface Sprites {
    back_default:       string;
    front_default:      string;
}
