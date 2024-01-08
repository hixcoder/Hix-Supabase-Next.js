"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function BuisnessItem() {
  const route = useRouter();
  function handleClick() {
    route.push("/new-buisness");
  }

  return (
    <div className="flex flex-row items-center justify-between p-4 my-2 border-2 border-slate-200 rounded-lg">
      <p>name</p>
      <p>hixcoder@example.com</p>
      <p>10-12-2023</p>
      <Button onClick={handleClick} className="">
        Edit
      </Button>
    </div>
  );
}
