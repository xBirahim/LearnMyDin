interface IGrade {
  name: string;
  grade: string;
}

export default class Grade implements IGrade {
  name: string;
  grade: string;

  constructor(name: string, grade: string) {
    this.name = name;
    this.grade = grade;
  }
}
