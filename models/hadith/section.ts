export default class Section {
    [key: string]: string;
  
    constructor(sectionData: { [key: string]: string }) {
      Object.keys(sectionData).forEach((key) => {
        this[key] = sectionData[key];
      });
    }
}