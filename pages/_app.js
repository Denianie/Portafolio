import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "../utils/languageContext";


const App = ({ Component, pageProps }) => { 
  return (
    <ThemeProvider defaultTheme="light" enableSystem={true}>
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
