import Grade from "./grade";
import Reference from "./reference";

interface IHadith {
  hadithnumber: number;
  arabicnumber: number;
  text: string;
  grades: Grade[];
  reference: Reference;
}

export default class Hadith implements IHadith {
  hadithnumber: number;
  arabicnumber: number;
  text: string;
  grades: Grade[];
  reference: Reference;

  constructor(
    hadithnumber: number,
    arabicnumber: number,
    text: string,
    grades: Grade[],
    reference: Reference
  ) {
    this.hadithnumber = hadithnumber;
    this.arabicnumber = arabicnumber;
    this.text = text;
    this.grades = [];
    this.reference = reference;
  }
}
