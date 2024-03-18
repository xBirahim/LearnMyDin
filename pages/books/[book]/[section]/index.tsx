import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import Hadith from "@/models/hadith/hadith";
import Metadata from "@/models/hadith/metadata";
import SectionDetail from "@/models/hadith/sectiondetail";
import HadithApi from "@/utils/hadithapi";
import {
  ObjectToHadith,
  ObjectToMetadata,
  ObjectToSectionDetail,
} from "@/utils/tools";
import { Divider } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function IndexPage() {
  const [selectedSection, setSelectedSection] = useState<
    string | string[] | undefined
  >(undefined);
  const [selectedBook, setSelectedBook] = useState<
    string | string[] | undefined
  >(undefined);
  const [sectionData, setSectionData] = useState<SectionDetail | null>();
  const [metadata, setMetadata] = useState<any>(null);
  const [hadiths, setHadiths] = useState<Hadith[]>([]);
  const router = useRouter();
  const { section } = router.query;

  const hadithapi = new HadithApi();

  useEffect(() => {
    if (!section) {
      return;
    }
    setSelectedBook(router.query["book"]);
    setSelectedSection(section);

    if (typeof selectedBook !== "undefined" && selectedBook !== null) {
      hadithapi
        .getSectionByNumber(
          selectedBook as string,
          parseInt(selectedSection as string)
        )
        .then((response) => {
          let hadiths = response["hadiths"].map(ObjectToHadith);
          setHadiths(hadiths);
          let metadata = response["metadata"];
          setMetadata(metadata);

          console.log(metadata);
        });
    }
  }, [section, selectedBook]);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>
            <small>{selectedBook}</small> / {selectedSection}&nbsp;
          </h1>
        </div>
      </section>
      {hadiths?.length > 0 ? (
        hadiths?.map((element) => {
          if (element.text.valueOf() != "") {
            return (
              <>
                <p>{element.text}</p>
                <Divider />
                <br></br>
              </>
            );
          } else {
            return;
          }
        })
      ) : (
        <p>Pas de hadith</p>
      )}
    </DefaultLayout>
  );
}
