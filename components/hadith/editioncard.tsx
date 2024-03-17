import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Chip } from "@nextui-org/chip";
import { Edition } from "@/models/hadith/edition";

interface EditionProps {
  edition: Edition;
}

export const EditionCard = ({ edition }: EditionProps) => {
  return (
    <>
      <Card>
        <p>{edition.name}</p>
      </Card>
    </>
  );
};
