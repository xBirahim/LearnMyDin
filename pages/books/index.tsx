import {
  Select,
  SelectItem,
  Accordion,
  AccordionItem,
  Divider,
  Chip,
  Link,
} from "@nextui-org/react";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import HadithApi from "@/utils/hadithapi";
import { EditionCard } from "@/components/hadith/editioncard";
import { useEffect, useState } from "react";
import { Book } from "@/models/hadith/edition";

import { SelectedItems } from "@nextui-org/react";

//TESTS
import { editiondata } from "@/data/editiondata";
import Collection from "@/models/hadith/collection";
import { useRouter } from "next/navigation";
import { link } from "fs";
import React from "react";
import { ObjectToBook } from "@/utils/tools";

export default function IndexPage() {
  const [editions, setEditions] = useState<(Book | null)[]>();
  const [selectedLanguage, setSelectedLanguage] = useState<any>("English");
  const hadithapi = new HadithApi();
  //   const [selectedLanguage, setSelectedLanguage] = React.useState(new Set([siteConfig.language[0].name]));

  const router = useRouter();

  useEffect(() => {
    //Avec API
    // // Supposons que hadithapi.getEditions() retourne une promesse qui résout avec les données d'édition
    // hadithapi.getEditions().then((data) => {
    //   // Transformez les données en objets Edition et mettez à jour l'état
    //   const editionsData = Object.keys(data).map((key) => ObjectToEdition(data[key]));
    //   setEditions(editionsData);
    // });

    // Sans API
    const editionsData = editiondata.map((obj: any) => {
      return ObjectToBook(obj[Object.keys(obj)[0]]);
    });

    setEditions(editionsData);

    // test
    // console.log(selectedLanguage["currentKey"]);
  }, [selectedLanguage]);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Books </h1>
        </div>
        <Select
          labelPlacement="outside"
          label="Language"
          className=""
          defaultSelectedKeys="1"
          onSelectionChange={(e) => {
            console.log(e);
          }}
        >
          {siteConfig.language.map((language, index) => (
            <SelectItem key={index} value={language.name}>
              {language.name}
            </SelectItem>
          ))}
        </Select>
        <Divider />
      </section>
      {/* <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        {editions ? (
          editions.map((edition) => (
            <EditionCard key={edition?.name} edition={edition} />
          ))
        ) : (
          <p>Chargement des éditions...</p>
        )}
      </section> */}

      <Accordion variant="bordered" selectionMode="multiple">
        {editions ? (
          editions?.map((edition, index) => {
            return (
              <AccordionItem
                key={index}
                title={
                  <div className="flex space-x-2">
                    <p>{edition?.name}</p>
                    {edition?.collection.some(
                      (element) => element.language === "French"
                    ) ? (
                      <Chip>FR</Chip>
                    ) : null}
                  </div>
                }
                textValue="Language"
              >
                {edition?.collection
                  ? edition.collection.map((element, index) => {
                      return (
                        <>
                          <Link
                            isBlock
                            showAnchorIcon
                            href={`/books/${element.name}`}
                          >
                            {element.language}
                          </Link>
                        </>
                      );
                    })
                  : null}
              </AccordionItem>
            );
          })
        ) : (
          <AccordionItem title={"No Book found!"}></AccordionItem>
        )}
        {/* <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title={
            <p>
              abudawud&emsp;<Chip>fr</Chip>
            </p>
          }
        >
          <Accordion variant="light">
            <AccordionItem
              key="1"
              title="English"
              subtitle={
                <span>
                  <strong>3</strong> Sections
                </span>
              }
            ></AccordionItem>
            <AccordionItem
              key="2"
              title="French"
            ></AccordionItem>
          </Accordion>
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="bukhari">
          lol
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="dehlawi">
          lol
        </AccordionItem> */}
      </Accordion>
    </DefaultLayout>
  );
}
