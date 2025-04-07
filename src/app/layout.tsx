import type { Metadata } from "next";
import "@/assets/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import MainWrapper from "@/components/layout/main-wrapper";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: {
    default:
      "Rizal Suryawan – Personal Blog | Thoughts, Stories & Life Journeys",
    template: "%s | Rizal Suryawan's Blog",
  },
  description:
    "Welcome to Rizal Suryawan's personal blog. Reflections on life, technology, art, and self-growth. Raw stories, honest perspectives.",
  authors: [{ name: "Rizal Suryawan", url: "https://rizal.deno.dev/" }],
  keywords: ["Rizal Suryawan", "Programmer", "Software Engineer"],
  icons: {
    icon: "https://fav.farm/⚡",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <ThemeProvider>
          <MainWrapper>
            <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
              <Header />
              <main>{children}</main>
              <Footer />
            </div>
          </MainWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
