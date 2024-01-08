import Link from "next/link";
import { Button } from "../ui/button";

export function BackButton(props: { href: string; label: string }) {
  return (
    <Button variant={"link"} className="font-normal w-full" size={"sm"} asChild>
      <Link href={props.href}>{props.label}</Link>
    </Button>
  );
}
