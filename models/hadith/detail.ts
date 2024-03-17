interface IDetail {
  hadithnumber_first: number;
  hadithnumber_last: number;
  arabicnumber_first: number;
  arabicnumber_last: number;
}

export default class Detail implements IDetail {
  hadithnumber_first: number;
  hadithnumber_last: number;
  arabicnumber_first: number;
  arabicnumber_last: number;

  constructor(
    hadithnumber_first: number,
    hadithnumber_last: number,
    arabicnumber_first: number,
    arabicnumber_last: number
  ) {
    this.hadithnumber_first = hadithnumber_first;
    this.hadithnumber_last = hadithnumber_last;
    this.arabicnumber_first = arabicnumber_first;
    this.arabicnumber_last = arabicnumber_last;
  }
}
