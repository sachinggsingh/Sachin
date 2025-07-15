import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingDockDemo } from "@/components/navbar";
import { ThemeToggle } from "@/components/theme-toggle";
import { GridBackgroundDemo } from "@/components/grid-background";
import { Toaster } from "@/components/ui/sonner"


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
    <html
      lang="en"
      className={sourceCodePro.variable}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <GridBackgroundDemo>
            <div className="fixed top-4 right-4 z-50">
              <ThemeToggle />
            </div>
            <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 xl:px-32">
              {children}
              <Toaster position="top-center" />
            </div>
            <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
              <FloatingDockDemo />
            </div>
          </GridBackgroundDemo>
        </ThemeProvider>
      </body>
    </html>
  );
}

