"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`origin-center transform transition-transform duration-300 ease-in-out ${
        isOpen ? "scale-90" : "scale-100"
      }`}
    >
      <div className="wrapper flex flex-col items-center justify-center px-4 py-3">
        <p className="mb-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
          consectetur aliquid reiciendis deserunt harum repellat provident
          voluptatem quod earum, nesciunt dolore dolorum culpa quam laborum
          ducimus veniam facere labore exercitationem?
        </p>
        <Drawer onOpenChange={setIsOpen}>
          <DrawerTrigger asChild>
            <Button variant="outline">Open Drawer</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
                doloribus ipsam rem deserunt vitae corporis repellendus
                quibusdam, ut at autem ipsum, incidunt neque cum dolores
                laudantium, ullam est. Natus, eligendi.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
