import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Chip } from "@nextui-org/chip";

interface HadithCardProps {
  title: string;
  content: string;
  date: Date;
}

export const HadithCard = ({title, content, date }: HadithCardProps) => {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
      <Card className="max-w-[340px] rounded-[12px]" isPressable={true} isHoverable={true}>
        <CardHeader>
          <Chip color="success" variant="dot">
            New
          </Chip>
          <p className="mx-auto">{title}</p>
        </CardHeader>
        <CardBody className="cursor-default ">
          <p>{content}</p>

          {/* <ScrollShadow hideScrollBar={true}>
          <Textarea
            isReadOnly
            value={text}
            variant="underlined"
            className="min-w-[320px] text-small text-default-200 flex-wrap"
            fullWidth={true}
          />
        </ScrollShadow> */}
        </CardBody>
        <Divider className= "my-1 opacity-100" />
        <CardFooter className="gap-1">
          <p className=" cursor-default font-semibold text-default-500 text-small">
            {date.toDateString()}
          </p>
        </CardFooter>
      </Card>
  );
};
