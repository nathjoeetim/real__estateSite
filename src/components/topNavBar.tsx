"use client";
import { useRouter } from "next/navigation";
import Logo from "./logo";
import { SideBarContainer } from "./sideBar";
import { ModeToggle } from "./theme_toggler";
import { Button } from "./ui/button";

function NavigationBarComponent() {
  const router = useRouter();

  function onNavigateToLoginScreenFn() {
    router.push("/login");
  }

  return (
    <div className="flex felx-row item-center justify-between w-full border-b mb-2">
      <div className="flex flex-row items-center justify-between px-2 py-2 w-full">
        <Logo />
        <div className="flex lg:hidden">
          <SideBarContainer />
        </div>
        <div className="hidden lg:flex flex-row item-center gap-6 ">
          <Button
            variant="outline"
            className="transition cursor-pointer bg-violet-700  "
            onClick={onNavigateToLoginScreenFn}
          >
            Login / Signup
          </Button>
          {/* <Button className="transition bg-violet-700 ">Sign-up</Button> */}
        </div>
        {/* <ModeToggle /> */}
      </div>
    </div>
  );
}

export default NavigationBarComponent;
