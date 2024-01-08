"use client";
import { BuisnessItem } from "@/components/protected/dashboard/buisness-item";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { BuisnessSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { startTransition, useState } from "react";
import { useRouter } from "next/navigation";

export default function NewBuisnessPage() {
  const [error, setError] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof BuisnessSchema>>({
    resolver: zodResolver(BuisnessSchema),
    defaultValues: {
      name: "",
    },
  });

  function onsubmit(values: z.infer<typeof BuisnessSchema>) {
    setError("");
    console.log(values);
    // startTransition(() => {
    // login(values).then((data) => {
    //   setError(data?.error);
    // });
    // });
  }

  const route = useRouter();
  function handleClick() {
    route.push("/dashboard");
  }

  return (
    <div className="flex flex-col items-center min-h-96 h-[70%] mt-8 bg-slate-50 w-fit rounded-md p-4 mx-auto">
      <div className="w-full flex justify-center items-center ">
        <h1 className="text-2xl my-4">Create New Buisness</h1>
      </div>
      <div className="w-96 h-72 flex justify-center ">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onsubmit)}
            className="space-y-6 w-full h-full flex flex-col justify-between"
          >
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Buisness Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        // disabled={isPending}
                        placeholder="Enter buisness name"
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
            </div>
            <div className="flex flex-row space-x-4">
              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700"
                // disabled={isPending}
              >
                Save
              </Button>
              <Button
                type="button"
                onClick={handleClick}
                className="w-full bg-slate-500 hover:bg-slate-600"
                // disabled={isPending}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
