import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Header } from "./header";
import { BackButton } from "./back-button";

export function CardWrapper(props: {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
}) {
  return (
    <Card className="w-96 shadow-md">
      <CardHeader>
        <Header label={props.headerLabel} />
      </CardHeader>
      <CardContent>{props.children}</CardContent>

      <CardFooter>
        <BackButton label={props.backButtonLabel} href={props.backButtonHref} />
      </CardFooter>
    </Card>
  );
}
