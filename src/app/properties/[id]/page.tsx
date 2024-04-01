"use client";

import { AgentAccountComponent } from "@/components/agentProfile";
import { PropertyData, propertyDataAlises } from "@/components/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function PropertyDetailsComponent() {
  const params = useParams<{ id: string }>();
  const [selectedProduct, setSelectedProduct] = useState<propertyDataAlises>();
  const [dontExist, setDontExit] = useState<boolean>(false);
  // product details will be gotten based on id
  useEffect(() => {
    const property = PropertyData.find((data, index) => {
      return data.id === +params.id;
    });

    if (property) {
      setDontExit(false);
      setSelectedProduct(property);
    } else {
      setDontExit(true);
    }
  }, [params.id]);

  function onSubmitFormHandelerFn() {
    //
  }

  return (
    <section>
      {dontExist ? (
        <div className="flex flex-row items-center justify-center h-[90vh] font-extrabold text-2xl">
          <h4 className=" underline text-slate-300 cursor-pointer">
            Item Not Found ..... Return To Previous Page
          </h4>
        </div>
      ) : (
        <div className="flex-col p-10 mx-auto min-h-[800px] mb-14">
          <div className="flex mb-5 flex-col lg:flex-row lg:items-center  lg:justify-between">
            <div>
              <h3 className="text-2xl font-semibold">
                {selectedProduct?.name}
              </h3>
              <h3 className="text-lg mb-4 ">{selectedProduct?.address}</h3>
            </div>
            <div className="flex mb-4 lg:mb-0 gap-x-2 text-sm">
              <div className="bg-green-400 px-5 rounded-full">
                {selectedProduct?.type}
              </div>
              <div className="bg-indigo-400 px-5 rounded-full">
                {selectedProduct?.country}
              </div>
            </div>
            <div className="text-3xl font-semibold text-green-500">
              {selectedProduct?.price}
            </div>
          </div>
          <div className=" flex flex-col items-start gap-8 lg:flex-row">
            <div className="max-w-[758px]">
              <div className="mb-8">
                <Image
                  src={selectedProduct?.imageLg}
                  height={520}
                  width={620}
                  alt="display_image"
                  className=""
                />
              </div>
              <div className="flex flex-col gap-4 mb-4">
                <div className="bg-indigo-500 px-3 rounded-full max-w-[620px]">
                  {selectedProduct?.surface}
                </div>
              </div>
              <p className="max-w-[620px] text-justify">
                {selectedProduct?.description}
              </p>
            </div>
            <div
              className="flex-1 rounded-md p-5 text-slate-600 w-full mb-8 shadow-xl"
              style={{
                backgroundImage:
                  "url('https://www.familycarbuyers.com/wp-content/uploads/2023/01/24572776_sl_031520_28970_10-1-scaled.jpg')",
              }}
            >
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 border border-gray-300 rounded-full">
                  <Image
                    src={selectedProduct?.agent.image}
                    height={90}
                    width={90}
                    alt="agent_image"
                    className="rounded-full"
                  />
                </div>
                <div>
                  <div className="font-bold text-lg">
                    {selectedProduct?.agent.name}
                  </div>
                  {/* this will link to another page that will view all other properties */}
                  <div className="text-sm text-indigo-700 cursor-pointer hover:underline">
                    <AgentAccountComponent account={selectedProduct!} />
                  </div>
                </div>
              </div>
              <form
                className="flex flex-col gap-2 mt-5"
                onSubmit={onSubmitFormHandelerFn}
              >
                <div className="flex flex-row items-center justify-center w-full">
                  <h4 className="text-lg font-bold underline">
                    Message {selectedProduct?.agent.name}
                  </h4>
                </div>
                {/* form will be here */}
                <div>
                  <Label htmlFor="message-2">Your Name</Label>
                  <Input
                    className="bg-transparent"
                    type="text"
                    placeholder="Name*"
                    name="user_name"
                  />
                </div>
                <div>
                  <Label htmlFor="message-2">Email</Label>

                  <Input
                    className="bg-transparent"
                    type="mail"
                    placeholder="Email*"
                    name="user_mail"
                  />
                </div>
                <div>
                  <Label htmlFor="message-2">Subject</Label>

                  <Input
                    className="bg-transparent"
                    type="text"
                    placeholder="Subject*"
                    name="user_subject"
                  />
                </div>
                <div className="grid w-full gap-3 mt-3">
                  <Label htmlFor="message-2">Your Message</Label>
                  <Textarea
                    className="bg-transparent"
                    placeholder="Type your message here."
                    name="user_message"
                    defaultValue={`Hello, i am intrested in your ${selectedProduct?.type.toLowerCase()} that is located at ${
                      selectedProduct?.address
                    } in ${selectedProduct?.country} at the stated price (${
                      selectedProduct?.price
                    }). Looking forward to your reply  `}
                  />
                  <p className="text-sm text-muted-foreground">
                    Your message will be copied to the agent.
                  </p>
                </div>
                <div className=" flex flex-row w-full justify-end gap-5 mt-5">
                  <Button className="bg-violet-600 transition" type="submit">
                    Send Message
                  </Button>
                  <Button className="bg-violet-600 transition">Call</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default PropertyDetailsComponent;
