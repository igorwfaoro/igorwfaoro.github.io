interface Lang {
  key: string;
  currency: string;
}

const langs: { [key: string]: Lang } = {
  'en-us': {
    key: 'en-us',
    currency: 'USD'
  },
  'pt-br': {
    key: 'pt-br',
    currency: 'BRL'
  }
};

const FALLBACK_LANG = 'en-us';

const langMap: Record<string, keyof typeof langs> = {
  en: 'en-us',
  pt: 'pt-br'
};

const rawLang = 'pt-br'//(navigator?.language ?? FALLBACK_LANG).toLowerCase();
const exact = langs[rawLang];

export const lang =
  exact || langs[langMap[rawLang.split('-')[0]]] || langs[FALLBACK_LANG];
