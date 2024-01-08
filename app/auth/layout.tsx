import React, { Children } from "react";

export default function AuthLayout(props: { children: React.ReactNode }) {
  return (
    <div className=" min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      {props.children}
    </div>
  );
}
