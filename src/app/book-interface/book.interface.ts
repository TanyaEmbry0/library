import { AuthorModel } from "../models/author-model"
import { GenreModel } from "../models/genre-model";

export interface Book{
    id: string,
    title: string,
   isAvaliable: boolean,
    cover: string,
    dateAdded: string,
    authors: AuthorModel[];
    genres: GenreModel[];
     
}