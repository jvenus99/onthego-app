import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Public_Sans } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/app/theme";

import type { Metadata } from "next";
import "./globals.css";
import { CssBaseline } from "@mui/material";
import Header from "@/components/header";

const publicSans = Public_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-public-sans",
});

export const metadata: Metadata = {
  title: "Home On The Go",
  description: "Home Page",
  icons: [{ url: "/logo.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={publicSans.variable}>
      <body>
        <AppRouterCacheProvider>
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <Header />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
