"use client";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type OptionAlieses = {
  placeHolder?: string;
  options: string[];
  selectionLabel?: string;
  onGetSelectedValueHandeler: (selectedValue: string) => void;
};
export function SelectMenu({
  options,
  placeHolder,
  selectionLabel,
  onGetSelectedValueHandeler,
}: OptionAlieses) {
  const [selectedValue, setSelectedValue] = React.useState<string>("");

  // Event handler for when the value changes
  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
    onGetSelectedValueHandeler(value);
  };

  return (
    <Select value={selectedValue} onValueChange={handleSelectChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeHolder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{selectionLabel}</SelectLabel>
          {options.map((data: string, index: number) => {
            return (
              <SelectItem key={index} value={data}>
                {data}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
