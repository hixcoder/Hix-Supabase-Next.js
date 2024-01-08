import { BuisnessItem } from "@/components/protected/dashboard/buisness-item";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-96 h-[70%] mt-8 bg-slate-50 w-[80%] min-w-fit rounded-md p-8 mx-auto">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-xl font-bold">All buisnesses</h1>
        <Button className="bg-green-600 hover:bg-green-700">New+</Button>
      </div>
      <div className="flex flex-col my-8">
        <BuisnessItem />
        <BuisnessItem />
      </div>
    </div>
  );
}
