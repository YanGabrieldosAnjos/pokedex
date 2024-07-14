interface IPokedex {
    name: string;
    url: string;
}
export interface IPokedexList {
    count: number;
    next: string;
    previous: string;
    results: IPokedex[];
}