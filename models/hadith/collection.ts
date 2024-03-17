interface ICollection {
  name: string;
  book: string;
  author: string;
  language: string;
  has_sections: boolean;
  direction: string;
  source: string;
  comments: string;
  link: string;
  linkmin: string;
}

export default class Collection implements ICollection {
  name: string;
  book: string;
  author: string;
  language: string;
  has_sections: boolean;
  direction: string;
  source: string;
  comments: string;
  link: string;
  linkmin: string;

  constructor(
    name: string,
    book: string,
    author: string,
    language: string,
    has_section: boolean,
    direction: string,
    source: string,
    comments: string,
    link: string,
    linkmin: string
  ){
    this.name = name;
    this.book = book;
    this.author = author;
    this.language = language;
    this.has_sections = has_section;
    this.direction = direction;
    this.source = source;
    this.comments = comments;
    this.link = link;
    this.linkmin = linkmin
  };
}
