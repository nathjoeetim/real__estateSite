import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/theme_toggler";
import NavigationBarComponent from "@/components/topNavBar";
import { Toaster } from "sonner";
import FotterComponent from "@/components/fotter";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "IjanHousing - Home for all",
  description: "Built  to Meet Your Desire as A Home Seller Or Buyer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-[#f8f7f4] dark:bg-[#0a0118] font-serif antialiased",
          fontSans.variable
        )}
      >
        <Toaster expand={true} closeButton />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex relative flex-col max-w-[1440px] mx-auto">
            <div className="fixed right-2 bottom-3 z-40">
              <ModeToggle />
            </div>
            <NavigationBarComponent />
            {children}
            <FotterComponent />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
