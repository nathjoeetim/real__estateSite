"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CiMenuBurger } from "react-icons/ci";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "./logo";
import { useRouter } from "next/navigation";

export function SideBarContainer() {
  const router = useRouter();

  function onNavigateToLoginScreenFn() {
    router.push("/login");
  }

  return (
    <Sheet key={"left"}>
      <SheetTrigger asChild>
        <Button variant="outline">
          {" "}
          <CiMenuBurger size={30} className="cursor-pointer" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="mt-7 flex flex-col items-center justify-center">
          <SheetTitle>
            <SheetClose>
              <Logo />
            </SheetClose>
          </SheetTitle>
          <SheetDescription className="text-center text-violet-500">
            When you think of real-estate think us !!
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col item-center gap-6 justify-center mt-10 w-full">
          <SheetClose className="w-full">
            <Button
              variant="outline"
              className="transition cursor-pointer w-full"
              onClick={onNavigateToLoginScreenFn}
            >
              Login
            </Button>
          </SheetClose>
          <Button className="transition bg-violet-700 ">Sign-up</Button>
        </div>
        {/* here will be form for subsription to news letter  */}
      </SheetContent>
    </Sheet>
  );
}
