'use client';

import Loading from '@/app/loading';
import { lang } from '@/translation/lang';
import { createContext, useContext, useEffect, useState } from 'react';

type Messages = Record<string, string | string[]>;

export interface ITranslationProvider {
  t: <T extends string | string[] = string>(key: string) => T;
}

interface TranslationProviderProps {
  children: any;
}

const TranslationContext = createContext<ITranslationProvider | undefined>(
  undefined
);

const TranslationProvider = (props: TranslationProviderProps) => {
  const [messages, setMessages] = useState<Messages>();

  useEffect(() => {
    import(`@/translation/locales/${lang.key}.json`)
      .then(setMessages)
      .catch(() => setMessages({}));
  }, []);

  const t = <T extends string | string[] = string>(key: string): T => {
    const value = messages![key];

    if (value === undefined) return key as T; // fallback se não encontrar
    return value as T;
  };

  if (!messages) {
    return <Loading />;
  }

  return (
    <TranslationContext.Provider value={{ t }}>
      {props.children}
    </TranslationContext.Provider>
  );
};

export default TranslationProvider;

export const useTranslation = () => useContext(TranslationContext)!;
