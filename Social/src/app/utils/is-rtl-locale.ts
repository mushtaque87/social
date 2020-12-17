const rtlLocales = ["ar"];

function isRTLLocale(locale: string) {
  return rtlLocales.indexOf(locale) !== -1;
}

export default isRTLLocale;
