import HttpClient from "./httpclient";
import { Edition } from "@/models/hadith/edition";

export default class HadithApi {
  private baseUrl: string;
  private httpClient: HttpClient;

  constructor(apiVersion: string = "1") {
    this.baseUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@${apiVersion}`;

    this.httpClient = new HttpClient(this.baseUrl);
  }

  async getEditions(minified: boolean = false): Promise<any> {
    const endpoint = minified ? "editions.min.json" : "editions.json";

    return this.httpClient.get(`/${endpoint}`);
  }

  async getEditionByName(
    editionName: string,
    minified: boolean = false
  ): Promise<any> {
    const endpoint = minified
      ? `${editionName}.min.json`
      : `${editionName}.json`;
    return this.httpClient.get(`/editions/${endpoint}`);
  }

  async getHadithByNumber(
    editionName: string,
    hadithNo: number,
    minified: boolean = false
  ): Promise<any> {
    const endpoint = minified
      ? `${editionName}/${hadithNo}.min.json`
      : `${editionName}/${hadithNo}.json`;
    return this.httpClient.get(`/editions/${endpoint}`);
  }

  async getSectionByNumber(
    editionName: string,
    sectionNo: number
  ): Promise<any> {
    return this.httpClient.get(
      `/editions/${editionName}/sections/${sectionNo}.json`
    );
  }

  async getInfo(): Promise<any> {
    return this.httpClient.get("/info.json");
  }
}
