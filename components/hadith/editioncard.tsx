import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Chip } from "@nextui-org/chip";
import { Book } from "@/models/hadith/edition";

interface EditionProps {
  edition: Book | null;
}

export const EditionCard = ({ edition }: EditionProps) => {
  return (
    <>
    <Card className="py-4" isPressable isHoverable>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase">{edition?.name}</p>
        <small className="text-default-500">{edition?.collection.length} Collection</small>
        <h4 className="font-bold text-large">...</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">

      </CardBody>
    </Card>
    </>
  );
};
