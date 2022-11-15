import { useState } from "react";
import i18n from "i18next";
import { initReactI18next, Trans, useTranslation } from "react-i18next";
import "./App.css";
import { resources } from "./i18n";

i18n
  .use(initReactI18next) // plugins para serem carregados como complementos
  .init({
    resources: resources, //traduções de diferentes linguas
    fallbackLng: "en", //quando não tem nenhuma tradução disponivel essa vai ser a default
  });

function App() {
  const { t } = useTranslation();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="App">
      <div>
        <button onClick={() => changeLanguage("pt")}>
          <img src="https://cdn-icons-png.flaticon.com/128/7826/7826359.png" />
        </button>
        <button onClick={() => changeLanguage("en")}>
          <img src="https://cdn-icons-png.flaticon.com/128/3909/3909383.png" />
        </button>
      </div>
      <p>{t("bem vindo amigo")}</p>

      {/*trans component*/}
      <Trans t={t}>bem vindo amigo</Trans>

      {/*Plurals*/}
      <p>
        {t("ad_one")} - {t("ad_other")}
      </p>

      {/*Plurals with count */}
      <p>
        {t("adWithCount_one", { count: 1 })} -{" "}
        {t("adWithCount_other", { count: 10 })}
      </p>

      <p>
        <Trans count={10}>adWithCount</Trans> {" - "}
        <Trans count={1}>adWithCount</Trans>
      </p>
    </div>
  );
}

export default App;
