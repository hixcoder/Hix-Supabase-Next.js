"use client";
import { getAllBuisness } from "@/actions/buisness";
import { BuisnessItem } from "@/components/protected/dashboard/buisness-item";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

export default function DashboardPage() {
  const route = useRouter();
  const [buisnessList, setBuisnessList] = useState<Buisness[]>([]);
  const { data } = useSession();
  const [userId, setUserId] = useState("");
  // const {};

  function handleClick() {
    route.push("/new-buisness");
  }

  useEffect(() => {
    async function getData() {
      const buisnessListTmp = await getAllBuisness();
      // console.log(buisnessListTmp);
      if (buisnessListTmp) {
        setBuisnessList(buisnessListTmp.data);
      }
      if (data && data.user) {
        // console.log("data!.user!.id", data.user.id);
        setUserId(data.user.id);
      }
    }
    getData();
  }, [data]);

  return (
    <div className="flex flex-col min-h-96 h-[70%] mt-8 bg-slate-50 w-[80%] min-w-fit rounded-md p-8 mx-auto">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-xl font-bold">All buisnesses</h1>
        <Button
          onClick={handleClick}
          className="bg-green-600 hover:bg-green-700"
        >
          New+
        </Button>
      </div>
      <div className="flex flex-col my-8 max-h-[60vh] overflow-y-scroll">
        {buisnessList
          .slice()
          .reverse()
          .map((bsItem) => (
            <BuisnessItem
              key={bsItem.id}
              data={bsItem}
              isEditDisable={userId !== bsItem.userId}
            />
          ))}
      </div>
      {buisnessList.length === 0 && (
        <div>
          <p className="mx-auto text-2xl text-gray-400">
            No buisness created yet!
          </p>
        </div>
      )}
    </div>
  );
}
