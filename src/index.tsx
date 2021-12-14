import React from 'react';
import ReactDOM from 'react-dom';
import { addLocale, useLocale } from 'ttag';
import * as cookie from './cookie';
import './index.css';
import App from './App';

const LOCALE_COOKIE = '__locale';

function getLocale() {
  return cookie.get(LOCALE_COOKIE) || 'en';
}

export function saveLocale(locale: string) {
  cookie.set(LOCALE_COOKIE, locale);
}

const locale = getLocale();

if (locale !== 'en') {
  const translationsObj = require(`./i18n/${locale}.po.json`);
  addLocale(locale, translationsObj);
  useLocale(locale);
}

ReactDOM.render(<App />, document.getElementById('root'));
