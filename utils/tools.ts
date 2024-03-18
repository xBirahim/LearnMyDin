import Metadata from "@/models/hadith/metadata";
import SectionDetail from "@/models/hadith/sectiondetail";
import Section from "@/models/hadith/section";
import Info from "@/models/hadith/info";
import { Book } from "@/models/hadith/edition";
import Collection from "@/models/hadith/collection";
import Detail from "@/models/hadith/detail";
import Hadith from "@/models/hadith/hadith";
import Grade from "@/models/hadith/grade";
import Reference from "@/models/hadith/reference";

export function ObjectToBook(object: any): Book | null {
  try {
    return new Book(
      object["name"],
      object["collection"].map(
        (collection: {
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
        }) =>
          new Collection(
            collection.name,
            collection.book,
            collection.author,
            collection.language,
            collection.has_sections,
            collection.direction,
            collection.source,
            collection.comments,
            collection.link,
            collection.linkmin
          )
      )
    );
  } catch (error) {
    console.log("Erreur de cast: Collection");
    return null;
  }
}

export function ObjectToGrade(
  object:
    | {
        name: string;
        grade: string;
      }
    | any
): Grade | null {
  try {
    return new Grade(object.name, object.grade);
  } catch (error) {
    console.log(error);

    return null;
  }
}

export function ObjectToReference(object: {
  book: number;
  hadith: number;
}): Reference | null {
  try {
    return new Reference(object.book, object.hadith);
  } catch (error) {
    return null;
  }
}

export function ObjectToHadith(object: {
  hadithnumber: number;
  arabicnumber: number;
  text: string;
  grades: any;
  reference: any;
}): Hadith | null {
  try {
    let gradeslist: Grade[] = object.grades.map(ObjectToGrade);

    return new Hadith(
      object.hadithnumber,
      object.arabicnumber,
      object.text,
      gradeslist,
      object.reference
    );
  } catch (error) {
    return null;
  }
}

export function ObjectToDetail(object: any): Detail | null {
  try {
    return new Detail(
      object["hadithnumber_first"],
      object["hadithnumber_last"],
      object["arabicnumber_first"],
      object["arabicnumber_last"]
    );
  } catch (error) {
    return null;
  }
}

export function ObjectToSection(object: {
  [key: string]: string;
}): Section | null {
  try {
    return new Section(object);
  } catch (error) {
    return null;
  }
}

export function ObjectToSectionDetail(object: any): SectionDetail | null {
  try {
    return new SectionDetail(object);
  } catch (error) {
    return null;
  }
}

export function ObjectToMetadata(object: any): Metadata | null {
  try {
    // console.log("ici", object["section_details"]);

    let sections: any = ObjectToSection(object["sections"]);
    let section_details: any = ObjectToSectionDetail(object["section_details"]);

    return new Metadata(object["name"], sections, section_details);
  } catch (error) {
    console.log(error);

    return null;
  }
}

export function ObjectToInfo(object: any): Info | null {
  try {
    return null;
  } catch (error) {
    return null;
  }
}
