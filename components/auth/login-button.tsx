"use client";

import { useRouter } from "next/navigation";
import React from "react";

export function LoginButton(props: {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}) {
  const mode = props.mode || "redirect";
  const router = useRouter();

  function onClick() {
    router.push("/auth/login");
  }
  if (mode === "modal") {
    return <span>Todo: implement modal</span>;
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {props.children}
    </span>
  );
}
