import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Seo from "@/components/Seo";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
      <Seo />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
