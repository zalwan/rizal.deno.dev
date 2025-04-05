"use client";

import { useDrawerStore } from "@/stores";

export default function MainWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen } = useDrawerStore();

  return (
    <div
      className={`origin-center transform transition-transform duration-300 ease-in-out ${
        isOpen ? "scale-95" : "scale-100"
      }`}
    >
      {children}
    </div>
  );
}
