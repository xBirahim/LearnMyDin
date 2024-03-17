import Section from "./section";
import SectionDetail from "./sectiondetail";

interface IMetadata {
  name: string;
  section: Section;
  section_detail: SectionDetail;
}

export default class Metadata implements IMetadata {
  name: string;
  section: Section;
  section_detail: SectionDetail;

  constructor(name: string, section: Section, section_detail: SectionDetail) {
    this.name = name;
    this.section = section;
    this.section_detail = section_detail;
  }
}





