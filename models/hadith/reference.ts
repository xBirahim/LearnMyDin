interface IReference {
  book: number;
  hadith: number;
}

export default class Reference implements IReference {
  book: number;
  hadith: number;

  constructor(book: number, hadith: number) {
    this.book = book;
    this.hadith = hadith;
  }
}
