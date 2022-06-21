/**
 * Sózdiń aqırǵı háribin qaytaradı
 * @param soz Kiriwsi sóz
 * @returns {string} Aqırǵı hárip
 */
export const lastChar = (soz: string): string => {
  const last2Chars = soz.slice(-2).toLowerCase();
  const lastIndex = soz.length - 1;

  if (last2Chars === 'sh' || last2Chars === 'ch') {
    return soz.slice(-2);
  }

  return soz[lastIndex].toLowerCase();
};
