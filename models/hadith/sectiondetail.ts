import Detail from "./detail";

export default class SectionDetail {
  [key: string]: Detail;

  constructor(sectionData: { [key: string]: Detail }) {
    Object.keys(sectionData).forEach((key) => {
      this[key] = sectionData[key];
    });
  }
}
