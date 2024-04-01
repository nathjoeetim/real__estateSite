import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function LoginComponent() {
  return (
    <Tabs defaultValue="login" className="w-[400px]">
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
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Password</Label>
              <Input
                id="username"
                placeholder="currect password"
                type="password"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-2 items-start justify-start">
            <Button>Login</Button>
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
        <Card>
          <CardHeader>
            <CardTitle>Signup Here</CardTitle>
            <CardDescription>
              We are ready to start the journey of property acquisition with
              you.{" "}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="user_name">Legal Name</Label>
              <Input id="user_name" type="text" />
            </div>{" "}
            <div className="space-y-1">
              <Label htmlFor="user_country">Country Of Origin</Label>
              <Input id="user_country" type="text" />
            </div>{" "}
            <div className="space-y-1">
              <Label htmlFor="users_number">Phone number</Label>
              <Input id="users_number" type="number" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="user_nin">
                National Identification Number (NIN)
              </Label>
              <Input id="user_nin" type="number" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="set_password">password</Label>
              <Input id="set_password" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="confirm_password">Confirm password</Label>
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
      </TabsContent>
    </Tabs>
  );
}

export default LoginComponent;
