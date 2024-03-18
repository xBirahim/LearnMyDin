import Hadith from "./hadith";
import Section from "./section";
import SectionDetail from "./sectiondetail";

interface IInfo {
  hadiths: Hadith[];
  metadata: { name: string; section_details: SectionDetail; section: Section };
}

export default class Info {
    hadiths: Hadith[];
    metadata: { name: string; section_details: SectionDetail; section: Section };

    constructor(hadiths: Hadith[], metadata: { name: string; section_details: SectionDetail; section: Section }){
        this.hadiths = hadiths;
        this.metadata = metadata;
    }
}