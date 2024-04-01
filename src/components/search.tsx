import { useEffect, useState } from "react";
import { SelectMenu } from "./selectMenu";
import { Button } from "./ui/button";
import { RiSearch2Line } from "react-icons/ri";
import { ImSpinner10 } from "react-icons/im";
import { PropertyData, propertyDataAlises } from "./data";
import Loader from "@/app/loading";

function SearchPropertyComponent() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [allProperties, _setAllProperties] =
    useState<propertyDataAlises[]>(PropertyData);
  // const { axiosHandler } = useAxios(router);
  const [selectedCountries, setSelectedCountries] = useState<string>("(any)");
  const [selectedState, setSelectedState] = useState<string>("(any)");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("(any)");
  const [listOfCountries, setCountries] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<string[]>([
    "100000 - 130000",
    "130000 - 160000",
    "160000 - 1900000",
    "1900000 - 2200000",
    "100000 - 300000",
    "300000 - 400000",
  ]);

  const countries = [...new Set(PropertyData.map(data => data.country))];
  const state = [...new Set(PropertyData.map(data => data.state))];

  function onSearchPropertyFn() {
    setIsLoading(true);
    const minPrice = parseInt(selectedPriceRange?.split(" ")[0]);
    const maxPrice = parseInt(selectedPriceRange?.split(" ")[2]);

    const isDefault = (str: any) => {
      return str.split(" ").includes("(any)");
    };
    //  console.log(minPrice, maxPrice);

    const FilteredProperties = allProperties.filter((element, index) => {
      const propertyPrice = parseInt(element.price);

      // if all values are selected
      if (
        element.country === selectedCountries &&
        element.state === selectedState &&
        propertyPrice >= minPrice &&
        propertyPrice <= maxPrice
      ) {
        return element;
      }

      // if country is selected
      if (
        !isDefault(selectedCountries) &&
        isDefault(selectedPriceRange) &&
        isDefault(selectedState)
      ) {
        return element.country === selectedCountries;
      }

      // if property is selected
      if (
        !isDefault(selectedPriceRange) &&
        isDefault(selectedCountries) &&
        isDefault(selectedState)
      ) {
        if (propertyPrice >= minPrice && propertyPrice <= maxPrice) {
          return element;
        }
      }

      // if country and property is not default
      if (
        !isDefault(selectedCountries) &&
        !isDefault(selectedState) &&
        isDefault(selectedPriceRange)
      ) {
        return (
          element.country === selectedCountries &&
          element.state === selectedState
        );
      }

      // if country and price is not default
      if (
        !isDefault(selectedCountries) &&
        !isDefault(selectedPriceRange) &&
        isDefault(selectedState)
      ) {
        if (propertyPrice >= minPrice && propertyPrice <= maxPrice)
          return element.country === selectedCountries;
      }

      // if state and price is not default
      if (
        !isDefault(selectedState) &&
        !isDefault(selectedPriceRange) &&
        isDefault(selectedCountries)
      ) {
        if (propertyPrice >= minPrice && propertyPrice <= maxPrice) {
          return element.state === selectedState;
        }
      }

      if (
        !isDefault(selectedState) &&
        isDefault(selectedCountries) &&
        isDefault(selectedPriceRange)
      ) {
        // if state is not default
        return element.state === selectedState;
      }

      // if the values are default or empty
      if (
        isDefault(selectedCountries) &&
        isDefault(selectedPriceRange) &&
        isDefault(selectedState)
      ) {
        return allProperties;
      }
    });

    setTimeout(() => {
      setIsLoading(false); // return FilteredProperties;
      return FilteredProperties.length < 1
        ? " Make Another Filter For Search "
        : FilteredProperties;
    }, 2000);
  }

  return (
    <div className="px-[30px] py-6 w-[90%] mx-auto flex flex-col md:flex-row lg:flex-row items-end justify-between gap-4 lg:gap-x-3 relative lg:-top-3 lg:shadow-md border rounded-lg lg:backdrop-blur-sm md:px-[10px]">
      <div className="flex flex-col items-start justify-start w-full lg:w-[160px]">
        <span>Select Country</span>
        <SelectMenu
          options={countries}
          placeHolder="Select country"
          onGetSelectedValueHandeler={setSelectedCountries}
          selectionLabel="Countries"
        />
      </div>
      <div className="flex flex-col items-start justify-start w-full lg:w-[160px]">
        <span>Select State</span>
        <SelectMenu
          options={state}
          placeHolder="Select state"
          onGetSelectedValueHandeler={setSelectedState}
          selectionLabel="State in selected country"
        />
      </div>{" "}
      <div className="flex flex-col items-start justify-start w-full lg:w-[180px]">
        <span>Price Range</span>
        <SelectMenu
          options={priceRange}
          placeHolder="Price Range"
          onGetSelectedValueHandeler={setSelectedPriceRange}
          selectionLabel="Price Range"
        />
      </div>
      <Button
        className={`transition w-full md:max-w-[100px] lg:max-w-[160px] h-[40px] gap-2 ${
          isLoading ? "cursor-not-allowed " : "cursor-pointer"
        } `}
        variant={isLoading ? "destructive" : "default"}
        onClick={onSearchPropertyFn}
      >
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <span>Search</span>
            <RiSearch2Line />
          </>
        )}
      </Button>
    </div>
  );
}

export default SearchPropertyComponent;
