import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import HadithApi from "@/utils/hadithapi";
import { EditionCard } from "@/components/hadith/editioncard";
import { useEffect, useState } from "react";
import { Edition } from "@/models/hadith/edition";

//TESTS
import { editiondata } from "@/data/editiondata";
import Collection from "@/models/hadith/collection";
import { link } from "fs";

function ObjectToEdition(object: any): Edition | null {
  try {
    return new Edition(
      object["name"],
      object["collection"].map(
        (collection: {
          name: string;
          book: string;
          author: string;
          language: string;
          has_sections: boolean;
          direction: string;
          source: string;
          comments: string;
          link: string;
          linkmin: string;
        }) =>
          new Collection(
            collection.name,
            collection.book,
            collection.author,
            collection.language,
            collection.has_sections,
            collection.direction,
            collection.source,
            collection.comments,
            collection.link,
            collection.linkmin
          )
      )
    );
  } catch (error) {
    console.log("Erreur de cast: Collection");
    return null;
  }
}

export default function IndexPage() {
  const [editions, setEditions] = useState<(Edition | null)[]>();
  const hadithapi = new HadithApi();

  useEffect(() => {
    // Supposons que hadithapi.getEditions() retourne une promesse qui résout avec les données d'édition
    hadithapi.getEditions().then((data) => {
      // Transformez les données en objets Edition et mettez à jour l'état
      const editionsData = Object.keys(data).map((key) => ObjectToEdition(data[key]));
      setEditions(editionsData);
    });
  }, []);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Edition</h1>
        </div>

        <div className="mt-8"></div>
      </section>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      {editions ? (
          editions.map((edition) =>
            edition ? <EditionCard key={edition.name} edition={edition} /> : null
          )
        ) : (
          <p>Chargement des éditions...</p>
        )}
      </section>
    </DefaultLayout>
  );
}
