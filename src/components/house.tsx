"use client";
import { BiLandscape, BiBuildingHouse } from "react-icons/bi";
import { PropertyData, propertyDataAlises } from "./data";
import { useState } from "react";
import PropertyComponent from "./specificProperty";
import { useRouter } from "next/navigation";

function Properties() {
  const router = useRouter();
  const [AllProperties, _setAllProperties] =
    useState<propertyDataAlises[]>(PropertyData);

  function NavigateToPropertyDetailPage(id: number) {
    router.push(`/properties/${id}`);
  }

  return (
    <section className="mb-10">
      <div className="mx-auto gap-5 p-4">
        <div className="grid grid-cols-1 gap-4 lg:gap-14 md:grid-cols-2 lg:grid-cols-3">
          {AllProperties.map((element, index) => {
            return (
              <div
                key={index}
                onClick={() => NavigateToPropertyDetailPage(element.id)}
              >
                <PropertyComponent item={element} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Properties;
