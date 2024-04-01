import Image from "next/image";
import { propertyDataAlises } from "./data";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

type PropertyComponentAlises = {
  item: propertyDataAlises;
};

function PropertyComponent(item: PropertyComponentAlises) {
  const { item: property } = item;

  return (
    <Card className=" dark:bg-white p-3 rounded-lg rounded-tl-[80px] w-full max-w-[320px] mx-auto cursor-pointer shadow-lg hover:shadow-2xl mb-2 transition">
      <Image
        src={property.image}
        height={100}
        width={300}
        alt="property_image rounded-tl-[80px]  rounded-bl-[80px] "
        className="mb-4"
      />
      <div className="flex gap-x-2 text-sm mb-2">
        <div className="text-white bg-green-500 rounded-full px-3">
          {property.type}
        </div>
        <div className="text-white bg-indigo-500 px-3 rounded-full">
          {property.country}
        </div>
      </div>
      <div className="text-slate-800 text-xs font-semibold max-w-[260px] mb-1">
        {property.address}
      </div>
      <div className="text-white bg-indigo-500 px-3 rounded-full mb-4">
        {property.surface}
      </div>
      <div className="flex flex-row gap-1 items-center text-slate-600 m-2">
        {/* <div></div> */}
        <Image
          src={property.agent.image}
          height={30}
          width={30}
          alt="agnet_name"
          className="rounded-full "
        />
        <span className="text-sm">{property.agent.name}</span>
      </div>

      <div className="flex flex-row justify-between items-center mb-2">
        <span className="font-semibold text-green-500">{property.price}</span>
        <Button
          variant="outline"
          className="py-1 text-slate-800 dark:text-white "
        >
          Bid
        </Button>
      </div>
    </Card>
  );
}

export default PropertyComponent;
