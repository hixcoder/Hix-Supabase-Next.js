"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
export function SignOutBtn() {
  function handleClick() {
    signOut();
  }
  return (
    <Button
      onClick={handleClick}
      className="bg-white text-black hover:bg-slate-300"
    >
      Sign out
    </Button>
  );
}
