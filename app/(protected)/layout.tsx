import { SignOutBtn } from "@/components/protected/sign-out";

export default function ProtectedLayout(props: { children: React.ReactNode }) {
  return (
    <div className=" min-h-screen flex flex-col items-start justify-start bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800  p-14">
      <div className="h-fit w-full flex flex-row justify-end ">
        <SignOutBtn />
      </div>
      {/* <div className="min-h-96 h-[70%] mt-8 bg-slate-50 w-full rounded-md p-4"> */}
      {props.children}
      {/* </div> */}
    </div>
  );
}
