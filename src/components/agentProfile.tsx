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
import { Button } from "./ui/button";
import { propertyDataAlises } from "./data";
import Image from "next/image";
import { CiPhone } from "react-icons/ci";

type AgentAccountAlises = {
  account: propertyDataAlises;
};

export function AgentAccountComponent({ account }: AgentAccountAlises) {
  const agentDeatils = account?.agent;
  return (
    <Drawer>
      <DrawerTrigger>View Profile</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{agentDeatils?.name} (agent / owner)</DrawerTitle>
          <DrawerDescription className="flex lg:flex-row md:flex-row flex-col items-center justify-between">
            <div className="flex items-center gap-5 mt-5">
              <div className="w-20 h-20 border border-gray-300 rounded-full">
                <Image
                  src={agentDeatils?.image}
                  height={90}
                  width={90}
                  alt="agent_image"
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="font-bold text-lg text-white">
                  {agentDeatils?.name}
                </div>
                {/* if user is logedin he can view the agent number */}
                {/* <div className="text-sm text-indigo-700 cursor-pointer">
                  {agentDeatils?.phone}
                </div> */}
              </div>
            </div>
            <div className="flex flex-col item-center gap-6 justify-center mt-10 ">
              {/* <div className=" flex flex-row items-center gap-1 transition cursor-pointer p-3 rounded-lg bg-slate-400 text-white font-bold">
                <CiPhone size={35} color="grey" className="" />
                call
              </div> */}
              {/* user will  be told to login if he or she is not and want to view the agent profile */}
              <Button className="transition bg-violet-700 ">Login</Button>
            </div>
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>
            <span>Hide</span>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
