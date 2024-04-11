import { useState } from "react";

const useInputHook = (isValidConditionFn: any) => {
  const [enteredValue, setEnteredValue] = useState(``);
  const [IsTouched, setIsTouched] = useState(false);

  const IsValid = isValidConditionFn(enteredValue);

  const hasError = IsTouched && !IsValid;

  const onChangeHandeler = (e: any) => {
    setEnteredValue(e.target.value);
  };

  const IsTouchedFn = () => {
    setIsTouched(true);
  };

  const resetFn = () => {
    setEnteredValue(``);
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    IsValid,
    hasError,
    IsTouched,
    IsTouchedFn,
    onChangeHandeler,
    resetFn,
  };
};

export default useInputHook;

export function isEmail(value: string) {
  if (!value || typeof value !== "string") {
    return false;
  }
  return value.includes("@");
}

export function isNotEmpty(value: any) {
  if (!value && value !== 0) {
    return false;
  }

  return value.toString().trim() !== "";
}

export function isSamePassword(value: any) {}
