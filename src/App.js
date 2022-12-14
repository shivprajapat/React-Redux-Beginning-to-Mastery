import logo from "./logo.svg";
import "./App.css";
import PlusMinusClass from "./components/PlusMinusClass";
import PlusMinusFunction from "./components/PlusMinusFunction";
import { IntlProvider } from "react-intl";
import { FormattedMessage } from 'react-intl'

import en from "./lang/en.json";
import es from "./lang/es.json";
import ar from "./lang/ar.json";
import ru from "./lang/ru.json";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
function App() {
  const dispatch = useDispatch()
  const localeStore = useSelector((state) => state.lang.locale);
  const getMessages = useMemo(() => {
    switch (localeStore) {
      case "en":
        return en;
      case "es":
        return es;
      case "ar":
        return ar;
      case "ru":
        return ru;
      default:
        return en;
    }
  }, [localeStore]);

  const handleLangChange = (e) => {
    dispatch({ type: e.target.value.toUpperCase() })
  }
  return (
    <IntlProvider
      messages={getMessages}
      locale={localeStore}
      defaultLocale="en">
      <div className="App">
        <header className="App-header">
          <form action="">
            <input type="radio" name="language" id="en" value="en" checked={localeStore === 'en'} onChange={(e) => handleLangChange(e)} />
            <label htmlFor="en">EN</label>
            <input type="radio" name="language" id="es" value="es" checked={localeStore === 'es'} onChange={(e) => handleLangChange(e)} />
            <label htmlFor="es">ES</label>
            <input type="radio" name="language" id="ar" value="ar" checked={localeStore === 'ar'} onChange={(e) => handleLangChange(e)} />
            <label htmlFor="ar">AR</label>

            <input type="radio" name="language" id="ru" value="ru" checked={localeStore === 'ru'} onChange={(e) => handleLangChange(e)} />
            <label htmlFor="ru">RU</label>

          </form>

<section>
  <ul>
    <li><FormattedMessage id="lesaClub" /></li>
    <li><FormattedMessage id="explore" /></li>
    <li><FormattedMessage id="auction" /></li>
    <li><FormattedMessage id="drop" /></li>
    <li><FormattedMessage id="crates" /></li>
    <li><FormattedMessage id="community" /></li>
  </ul>
</section>

          <img src={logo} className="App-logo" alt="logo" />
          <section>
            <PlusMinusFunction />
            <PlusMinusClass />
          </section>
        </header>
      </div>

    </IntlProvider>
  );
}

export default App;
