import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingDockDemo } from "@/components/navbar";
import { ThemeToggle } from "@/components/theme-toggle";
import { GridBackgroundDemo } from "@/components/grid-background";

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sachin Singh",
  description: "Portfolio",
  icons:{
    icon:"/favicon.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceCodePro.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <GridBackgroundDemo>
            {/* Theme Toggle Button - fixed top right */}
            <div className="fixed top-4 right-4 z-50">
              <ThemeToggle />
            </div>
            {/* Main content container */}
            <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 xl:px-32">
              {children}
            </div>
            {/* Floating Dock - fixed bottom center */}
            <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
              <FloatingDockDemo />
            </div>
          </GridBackgroundDemo>
        </ThemeProvider>
      </body>
    </html>
  );
}
