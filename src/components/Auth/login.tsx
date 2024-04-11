import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useInputHook, { isEmail, isNotEmpty } from "../hooks/user_input";
import { useState } from "react";
import Loader from "@/app/loading";
import SignUpComponent from "./signup";

type LoginAlises = {
  email: string;
  password: string | number;
};

function LoginComponent() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formHasError, setFormHasError] = useState<boolean>(false);
  const [errorMesssage, setErrorMessage] = useState<string>("");

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
    value: passwordValue,
    IsTouched: passwordIsTouched,
    hasError: passwordHasError,
    IsValid: passwordIsValid,
    IsTouchedFn: passwordIsTouchedFn,
    onChangeHandeler: passwordOnChangeHandelerFn,
    resetFn: clearPasswordField,
  } = useInputHook(isNotEmpty);
  // authrnticate user login

  function handleLoginFn() {
    setIsLoading(true);
    // the input value from the email and text field
    const loginData: LoginAlises = {
      email: emailValue,
      password: passwordValue,
    };

    // check for validity of email anad password
    if (emailIsValid && passwordIsValid) {
      setFormHasError(false);

      // you can fetch data from endpoint to authenticate user login and store the user authentication token in local storage

      // clear the input field
      clearPasswordField();
      clearemailField();
      setIsLoading(false);
      return;
    }
    // this is to check if the email is not valid
    if (!emailIsValid) {
      setFormHasError(true);
      setErrorMessage("Email Field Required"); // display a unique invalid email error message

      setIsLoading(false);

      return;
    }
    // check if password has error
    if (!passwordIsValid) {
      setFormHasError(true);
      setErrorMessage("Input Password Assiociated with email"); //display a unique passwoed message
      setIsLoading(false);
      return;
    }

    setErrorMessage(`email and password can't be left empty`); //if both email and password has error
    setFormHasError(true);
    setIsLoading(false);
    return;
  }

  return (
    <Tabs defaultValue="login" className="w-[400px] transform">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Account Login</TabsTrigger>
        <TabsTrigger value="signup">Account Sign-up</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Enjoy our service to its potential after login.{" "}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Email</Label>
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
              <Label htmlFor="username">Password</Label>
              <Input
                id="username"
                placeholder="currect password"
                type="password"
                value={passwordValue}
                onChange={passwordOnChangeHandelerFn}
                onBlur={passwordIsTouchedFn}
              />
              {!passwordHasError ||
                (passwordIsTouched && (
                  <span className="text-red-300 font-sans text-xs font-semibold ">
                    {" "}
                    Invalid Password{" "}
                  </span>
                ))}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-2 items-start justify-start">
            <div className="flex flex-col-reverse items-start lg:flex-row lg:items-center justify-between w-full">
              <Button
                variant={isLoading ? "destructive" : "outline"}
                onClick={handleLoginFn}
                className={`${
                  isLoading ? "cursor-not-allowed" : "cursor-pointer"
                }`}
              >
                {isLoading ? <Loader /> : "Login"}
              </Button>

              {formHasError && (
                <span className="flex flex-row justify-end w-full text-red-100 font-sans text-sm font-semibold ">
                  {errorMesssage}
                </span>
              )}
            </div>
            <div className="flex flex-row items-center justify-center w-full mt-5 font-bold text-base underline">
              Login With
            </div>
            <div className="w-full flex flex-row items-center justify-center gap-10 border-t-slate-200">
              <div>
                <FaGoogle className="cursor-pointer" size={25} />
              </div>
              <div>
                <FaFacebook className="cursor-pointer" color="blue" size={25} />
              </div>
              <div>
                <FaApple className="cursor-pointer" size={25} />
              </div>
            </div>
            <TabsList className="bg-transparent p-0 m-0">
              <TabsTrigger value="signup">
                <span className="mt-5 cursor-pointer ">
                  {" "}
                  Don&apos;t have an account ?{" "}
                  <span className="text-violet-500 underline">Signup</span>
                </span>
              </TabsTrigger>
            </TabsList>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="signup">
        <SignUpComponent />
      </TabsContent>
    </Tabs>
  );
}

export default LoginComponent;
