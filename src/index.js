import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { GridLoader } from 'react-spinners';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'ru'],
    fallbackLng: 'en',
    detection: {
      order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    }
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<div className="container__preloader">
    <div className="gridLoader"><GridLoader color='#36d7b7' /></div>
  </div>}>
    <App />
  </Suspense>
);