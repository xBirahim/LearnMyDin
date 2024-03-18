import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { useRouter } from "next/router";
import HadithApi from "@/utils/hadithapi";
import React, { useEffect, useState } from "react";
import SectionDetail from "@/models/hadith/sectiondetail";
import Section from "@/models/hadith/section";
import Hadith from "@/models/hadith/hadith";
import Grade from "@/models/hadith/grade";
import { ObjectToGrade, ObjectToHadith, ObjectToMetadata } from "@/utils/tools";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Metadata from "@/models/hadith/metadata";
import Link from "next/link";

export default function IndexPage() {
  const [metadata, setMetadata] = useState<Metadata | null>(null);
  const [hadiths, setHadiths] = useState<Hadith[] | null>(null);
  const router = useRouter();
  const { book } = router.query;

  const navigateToSection = (section: string) => {
    // Utilisation de router.push pour naviguer vers la page souhaitée
    console.log(book);
    
    router.push(`/books/${book}/${section}`)
  };
  const hadithapi = new HadithApi();

  const x = {
    "0": {
      hadithnumber_first: 0,
      hadithnumber_last: 0,
      arabicnumber_first: 0,
      arabicnumber_last: 0,
    },
    "1": {
      hadithnumber_first: 1,
      hadithnumber_last: 31,
      arabicnumber_first: 1,
      arabicnumber_last: 31,
    },
  };

  const y = {
    "0": "",
    "1": "The Times of Prayer",
    "2": "Purity",
    "3": "Prayer",
  };

  const onehadith = {
    hadithnumber: 1,
    arabicnumber: 1,
    text: "bb",
    grades: [
      {
        name: "Salim al-Hilali",
        grade: "Sahih",
      },
      {
        name: "X",
        grade: "Y",
      },
    ],
    reference: {
      book: 1,
      hadith: 1,
    },
  };

  //   hadithapi.getInfo().then((response) => {
  //     console.log(response);
  //   });

  //   const uh = ObjectToHadith(onehadith);

  //   console.log(uh);

  useEffect(() => {
    if (!book) {
      return;
    }
    hadithapi.getEditionByName(book).then((response) => {
      let metadataresponse: any = ObjectToMetadata(response["metadata"]); // Il faut corriger le type pour mettre Metadata
      let hadithsresponse: Hadith[] = response["hadiths"].map(ObjectToHadith);
      setMetadata(metadataresponse);
      setHadiths(hadithsresponse);
    });
  }, [book]);
  if (metadata && hadiths) {
    // console.log(Object.keys(metadata?.section as any));
    console.log(metadata);
  }

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>{router.query["book"]}</h1>
        </div>
        <Accordion variant="bordered" selectionMode="multiple">
          {metadata ? (
            Object.keys(metadata?.section as any).map((key) => {
              return (
                <AccordionItem
                  // as={Link}
                  href={"/[section]"}
                  key={key}
                  title={
                    <>
                      <strong className="text-default-500">
                        Section {key}&emsp;
                      </strong>

                      <p className="font-bold">
                        {metadata.section[key] ? metadata.section[key] : "..."}
                      </p>
                      <small className="text-xs text-default-400">
                        {metadata.section_detail[key].hadithnumber_first} to{" "}
                        {metadata.section_detail[key].hadithnumber_last}
                      </small>
                    </>
                  }
                  indicator={<></>}
                  onPress={(e) => {navigateToSection(key)}}
                  textValue={metadata.section[key]}
                ></AccordionItem>
              );
            })
          ) : (
            <AccordionItem textValue="notFound">
              <p>Aucune section trouvée pour {"e"}</p>
            </AccordionItem>
          )}
        </Accordion>
      </section>
    </DefaultLayout>
  );
}
