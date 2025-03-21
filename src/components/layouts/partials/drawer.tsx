import React from "react";
import { DrawerWrapper } from "../style";

export default function Drawer({
  children,
  isOpen,
  setIsOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  return (
    <div
      className={`fixed overflow-hidden z-10 bg-gray-900 bg-opacity-60 inset-0 transform ease-in-out ${
        isOpen
          ? "transition-opacity opacity-100 duration-500 translate-x-0"
          : "transition-all delay-500 opacity-0 translate-x-full"
      }`}
    >
      <DrawerWrapper
        className={`w-screen max-w-[50vw] right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <article className="relative flex flex-col h-full space-y-6 overflow-y-auto w-lg">
          {children}
        </article>
      </DrawerWrapper>
      <section
        className="w-screen h-full cursor-pointer"
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </div>
  );
}
