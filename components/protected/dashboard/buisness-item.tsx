"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function BuisnessItem(props: {
  data: Buisness;
  isEditDisable: boolean;
}) {
  const route = useRouter();
  function handleClick() {
    route.push("/edit-buisness");
  }
  // console.log(
  //   "props.isEditDisable, props.data.name",
  //   props.isEditDisable,
  //   props.data.name
  // );
  return (
    <div className="flex flex-row items-center justify-between p-4 my-2 border-2 border-slate-200 rounded-lg">
      <p>{props.data.name}</p>
      <p>{props.data.email}</p>
      <p>{props.data.createdAt.toDateString()}</p>
      <Button disabled={props.isEditDisable} onClick={handleClick} className="">
        Edit
      </Button>
    </div>
  );
}
