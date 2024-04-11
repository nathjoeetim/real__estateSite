import { Label } from "@radix-ui/react-dropdown-menu";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "../ui/input";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import useInputHook, { isEmail, isNotEmpty } from "../hooks/user_input";

function SignUpComponent() {
  const {
    value: userNameValue,
    IsTouched: userNameIsTouched,
    IsValid: userNameIsValid,
    hasError: userNameHasError,
    IsTouchedFn: userNameIsTouchedFn,
    onChangeHandeler: userNameOnchangedHandelerFn,
    resetFn: clearuserNameField,
  } = useInputHook(isNotEmpty);

  const {
    value: countryValue,
    IsTouched: countryIsTouched,
    IsValid: countryIsValid,
    hasError: countryHasError,
    IsTouchedFn: countryIsTouchedFn,
    onChangeHandeler: countryOnchangeHandelerFn,
    resetFn: clearCountryField,
  } = useInputHook(isNotEmpty);

  const {
    value: emailValue,
    IsTouched: emailIsTouched,
    hasError: emailHasError,
    IsValid: emailIsValid,
    IsTouchedFn: emailIsTouchedFn,
    onChangeHandeler: emailOnChangeHandelerFn,
    resetFn: clearemailField,
  } = useInputHook(isEmail);

  const {
    value: phonenumberValue,
    IsTouched: phonenumberIsTouched,
    hasError: phonenumberHasError,
    IsValid: phonenumberIsValid,
    IsTouchedFn: phonenumberIsTouchedFn,
    onChangeHandeler: phonenumberOnChangedHandelerFn,
    resetFn: clearphonenumberField,
  } = useInputHook(isNotEmpty);

  const {
    value: ninInputValue,
    IsTouched: ninIsTouchedField,
    IsValid: ninIsValid,
    hasError: ninHasError,
    IsTouchedFn: ninIsTouchedFn,
    onChangeHandeler: ninIsChangedHandeler,
    resetFn: clearninField,
  } = useInputHook(isNotEmpty);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign-up</CardTitle>
        <CardDescription>
          We are ready to start the journey of property acquisition with you.{" "}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 ">
        <div className="space-y-1">
          <Label className="text-sm">
            Legal Name (ensure it is same with that on your ID)
          </Label>
          <Input
            id="user_name"
            type="text"
            placeholder="David Samuel"
            value={userNameValue}
            onChange={userNameOnchangedHandelerFn}
            onBlur={userNameIsTouchedFn}
          />
          {!userNameHasError ||
            (userNameIsTouched && (
              <span className="text-red-300 font-sans text-xs font-semibold">
                {" "}
                Legal Name field is required{" "}
              </span>
            ))}
        </div>{" "}
        <div className="space-y-1">
          <Label className="text-sm">Country Of Origin</Label>
          <Input
            id="user_country"
            type="text"
            placeholder="Ghana"
            value={countryValue}
            onChange={countryOnchangeHandelerFn}
            onBlur={countryIsTouchedFn}
          />
          {!countryHasError ||
            (countryIsTouched && (
              <span className="text-red-300 font-sans text-xs font-semibold">
                {" "}
                This Field Is Required{" "}
              </span>
            ))}
        </div>{" "}
        <div className="space-y-1">
          <Label>Email</Label>
          <Input
            id="login_mail"
            placeholder="example@mail.com"
            type="email"
            value={emailValue}
            onChange={emailOnChangeHandelerFn}
            onBlur={emailIsTouchedFn}
          />
          {!emailHasError ||
            (emailIsTouched && (
              <span className="text-red-300 font-sans text-xs font-semibold">
                {" "}
                Enter valid Email{" "}
              </span>
            ))}
        </div>
        <div className="space-y-1">
          <Label className="text-sm">Phone number</Label>
          <Input
            id="users_number"
            type="number"
            placeholder="1234567890"
            value={phonenumberValue}
            onChange={phonenumberOnChangedHandelerFn}
            onBlur={phonenumberIsTouchedFn}
          />
          {!phonenumberHasError ||
            (phonenumberIsTouched && (
              <span className="text-red-300 font-sans text-xs font-semibold">
                {" "}
                Enter an active phone number{" "}
              </span>
            ))}
        </div>
        <div className="space-y-1">
          <Label className="text-sm">
            National Identification Number (NIN)
          </Label>
          <Input
            id="user_nin"
            type="number"
            value={ninInputValue}
            onChange={ninIsChangedHandeler}
            onBlur={ninIsTouchedFn}
          />
          {!ninHasError ||
            (ninIsTouchedField && (
              <span className="text-red-300 font-sans text-xs font-semibold">
                {" "}
                This Field Is Required{" "}
              </span>
            ))}
        </div>
        <div className="space-y-1">
          <Label className="text-sm">password</Label>
          <Input id="set_password" type="password" />
        </div>
        <div className="space-y-1">
          <Label className="text-sm">Confirm password</Label>
          <Input id="confirm_password" type="password" />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start justify-end w-full ">
        <Button>Signup</Button>
        <TabsList className="bg-transparent p-0 m-0">
          <TabsTrigger value="login">
            <span className="mt-5 cursor-pointer ">
              {" "}
              Already have an account ?{" "}
              <span className="text-violet-500 underline">Login</span>
            </span>
          </TabsTrigger>
        </TabsList>
      </CardFooter>
    </Card>
  );
}

export default SignUpComponent;
