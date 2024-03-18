import { ObjectToGrade } from "@/utils/tools";
import Grade from "./grade";
import Reference from "./reference";

interface IHadith {
  hadithnumber: number;
  arabicnumber: number;
  text: string;
  grades: (Grade | null)[];
  reference: Reference;
}

export default class Hadith implements IHadith {
  hadithnumber: number;
  arabicnumber: number;
  text: string;
  grades: (Grade | null)[];
  reference: Reference;

  constructor(
    hadithnumber: number,
    arabicnumber: number,
    text: string,
    grades: Array<Object>,
    reference: Reference
  ) {
    this.hadithnumber = hadithnumber;
    this.arabicnumber = arabicnumber;
    this.text = text;
    this.grades = grades.map(ObjectToGrade);
    this.reference = reference;
  }
}
