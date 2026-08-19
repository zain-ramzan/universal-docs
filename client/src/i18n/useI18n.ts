/** Field Desk i18n hook: locale state controls language and complete LTR/RTL layout direction. */
import { useCallback, useEffect, useMemo, useState } from "react";
import { supportedLanguages, translations, type AppLanguage, type TranslationKey } from "./translations";
const STORAGE_KEY = "universaldocs:language";
function browserLanguage(): AppLanguage { const candidate = navigator.language.toLowerCase().split("-")[0] as AppLanguage; return supportedLanguages.includes(candidate) ? candidate : "en"; }
export function useI18n() { const [language, setLanguageState] = useState<AppLanguage>(() => (localStorage.getItem(STORAGE_KEY) as AppLanguage) || browserLanguage()); const rtl = language === "ar" || language === "ur"; useEffect(() => { document.documentElement.lang = language; document.documentElement.dir = rtl ? "rtl" : "ltr"; }, [language, rtl]); const setLanguage = useCallback((next: AppLanguage) => { localStorage.setItem(STORAGE_KEY, next); setLanguageState(next); }, []); const t = useCallback((key: TranslationKey) => translations[language][key] ?? translations.en[key], [language]); return useMemo(() => ({ language, setLanguage, t, rtl }), [language, setLanguage, t, rtl]); }
