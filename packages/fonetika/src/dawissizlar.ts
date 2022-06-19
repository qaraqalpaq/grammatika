import { buwingaBol } from './buwin';

export interface Dawissizlar {
  readonly barligi: ReadonlyArray<string>;
  readonly unli: ReadonlyArray<string>;
  readonly unsiz: ReadonlyArray<string>;
  readonly erinlik: {
    readonly qosErinlik: ReadonlyArray<string>;
    readonly erinlikTislik: ReadonlyArray<string>;
  };
  readonly tilAldi: ReadonlyArray<string>;
  readonly tilOrtasi: string;
  readonly tilArti: ReadonlyArray<string>;
  readonly kishkeneTillik: ReadonlyArray<string>;
  readonly komekey: string;
  readonly jabisinqi: ReadonlyArray<string>;
  readonly juwisinqi: ReadonlyArray<string>;
}

/**
 * @readonly
 */
export const dawissizlar: Dawissizlar = {
  barligi: [
    'b',
    'v',
    'g',
    'ǵ',
    'd',
    'j',
    'z',
    'y',
    'k',
    'q',
    'l',
    'm',
    'h',
    'n',
    'ń',
    'p',
    'r',
    's',
    't',
    'w',
    'f',
    'x',
    'c',
    'sh',
    'ch',
  ],

  unli: ['b', 'v', 'g', 'ǵ', 'd', 'j', 'z', 'l', 'm', 'n', 'ń', 'r', 'w', 'y'],
  unsiz: ['p', 'f', 'k', 'q', 't', 'sh', 's', 'x', 'h', 'c', 'ch'],

  // Jasalıwına qaray túrleri
  erinlik: {
    qosErinlik: ['b', 'p', 'm', 'w'],
    erinlikTislik: ['v', 'f'],
  },
  tilAldi: ['t', 'd', 'n', 'l', 's', 'sh', 'z', 'j', 'r', 'c', 'ch'],
  tilOrtasi: 'y',
  tilArti: ['g', 'k'],
  kishkeneTillik: ['q', 'ǵ', 'ń', 'x'],
  komekey: 'h',

  // Jasalıw usılına qaray túrleri
  jabisinqi: ['p', 'b', 'm', 't', 'd', 'n', 'g', 'k', 'q', 'ń', 'c', 'ch'],
  juwisinqi: ['w', 'f', 'v', 's', 'z', 'l', 'sh', 'j', 'y', 'h', 'ǵ', 'x'],
};

/**
 * Sózdiń aqırǵı buwını únli seske tamamlanǵanın tekseredi
 * @param soz Tekseriliwi kerek bolǵan sóz
 * @returns {boolean} Ekilik logikalıq operator qaytaradı (Jalǵan ya Shın)
 */
export const aqirgiBuwinUnlime = (soz: string): boolean => {
  let unli = false;
  const buwin = buwingaBol(soz) as Array<string>;
  let aqirgiBuwin = buwin.pop();

  if (!aqirgiBuwin) return false;
  if (aqirgiBuwin.length === 3) aqirgiBuwin = aqirgiBuwin.substring(1);

  dawissizlar.unli.forEach(ses => {
    unli = unli || aqirgiBuwin!.includes(ses);
  });

  return unli;
};
