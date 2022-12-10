import { Navbar } from './components/Navbar/Navbar';
import { HelpYou } from './components/HelpYou/HelpYou';
import { Sayhello } from './components/Sayhello/Sayhello';
import { AboutMe } from './components/AboutMe/AboutMe';
import { SendForm } from './components/SendForm/SendForm';
import { Skills } from './components/Skills/Skills';
import { MyWorkProject } from './components/MyWorkProject/MyWorkProject';
import { Contacts } from './components/Contacts/Contacts';
import { Footer } from './components/Footer/Footer';
import { BurgerMenu } from './components/BurgerMenu/BurgerMenu';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';
import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch';
import { useTranslation } from 'react-i18next';
import './theme.css';
import { useEffect } from 'react';
export const ThemeContext = createContext(null);

export function App() {

  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  const { t } = useTranslation();
  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme');
    if (savedTheme !== null) setTheme(savedTheme);
  }, []);
  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <Navbar />
        <div className='switch'>
          <label>{theme === "light" ? t("lightMode") : t("darkMode")}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
        <BurgerMenu />
        <Sayhello />
        <HelpYou />
        <AboutMe />
        <Skills />
        <MyWorkProject />
        <Contacts />
        <SendForm />
        <ScrollToTop />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}