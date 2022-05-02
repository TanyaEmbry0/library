import { AuthorModel } from "../models and interfaces/author-model";
import { GenreModel } from "../models and interfaces/genre-model";


export interface Book{
    id: string,
    title: string,
    isAvaliable: boolean,
    cover: string,
    dateAdded: string,
    authors: AuthorModel;
    genres: GenreModel[];
    description: string;

}
