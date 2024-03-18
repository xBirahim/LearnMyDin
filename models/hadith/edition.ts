import Collection from "./collection";

export interface IEdition {
  name: string;
  collection: Collection[];
}

export class Book {
    name: string;
    collection: Collection[];

    constructor(name: string, collection: Collection[]){
        this.name = name;
        this.collection = collection;
    }
}
