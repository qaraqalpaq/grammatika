/**
 * Sózdi buwınǵa bóliwshi funkciya
 * @param soz  Buwınǵa bóliniwi kerek bolǵan sóz
 * @returns {(string|Array)} Buwınǵa bólingen sóz yamasa qátelik
 * @example <caption>buwingaBol funckciyasın qollanıw tártibi.</caption>
 * buwingaBol('qaraqalpaq');
 * // ['qa', 'ra', 'qal', 'paq'] dep qaytaradı.
 */
export const buwingaBol = (soz: string): string | string[] | null => {
  if (soz === '') throw new Error('Sóz kiritilmedi.');
  if (soz.match(/\s/gi))
    throw new Error(
      'Sózde heshqanday bos orınlar ya taza qatar bolmawı kerek.',
    );

  const regExp =
    /[^aáiıeoóuú]*[aáiıeoóuú]+(?:[^aáiıeoóuú]*$|[^aáiıeoóuú](?=[^aáiıeoóuú]))?/gi;

  return soz.match(regExp);
};

/**
 * Sózdiń ya buwınnıń ashıq buwınlı ekenligin tekseriw
 * @param soz Tekseriliwi kerek bolǵan sóz ya buwın
 * @returns {boolean} Ekilik logikalıq operator qaytaradı (Jalǵan ya Shın)
 */
export const ashiqBuwinliMa = (soz: string): boolean => {
  const buwinlar = buwingaBol(soz) as Array<string>;
  let ashiqpa = true;

  buwinlar.forEach(buwin => {
    if (buwin.length === 1) {
      ashiqpa = ashiqpa && !!buwin.match(/[aáiıeoóuú]/gi);
    } else {
      ashiqpa = ashiqpa && !!buwin.match(/[aáiıeoóuú]$/gi);
    }
  });

  return ashiqpa;
};

/**
 * Sózdiń ya buwınnıń tuyıq buwınlı ekenligin tekseriw
 * @param soz Tekseriliwi kerek bolǵan sóz ya buwın
 * @returns {boolean} Ekilik logikalıq operator qaytaradı (Jalǵan ya Shın)
 */
export const tuyiqBuwinliMa = (soz: string): boolean => {
  const buwinlar = buwingaBol(soz) as Array<string>;
  let tuyiqpa = true;

  if (buwinlar.length === 1) {
    return tuyiqpa && !!buwinlar[0].match(/^[aáiıeoóuú]/gi);
  }

  buwinlar.forEach(buwin => {
    tuyiqpa = tuyiqpa && !!buwin.match(/^[aáiıeoóuú]/gi);
  });

  return tuyiqpa;
};

/**
 * Sózdiń ya buwınnıń qamaw buwınlı ekenligin tekseriw
 * @param soz Tekseriliwi kerek bolǵan sóz ya buwın
 * @returns {boolean} Ekilik logikalıq operator qaytaradı (Jalǵan ya Shın)
 */
export const qamawBuwinliMa = (soz: string): boolean => {
  const buwinlar = buwingaBol(soz) as Array<string>;
  let qamawma = true;

  const { basi, aqiri } = { basi: /[^aáiıeoóuú]$/gi, aqiri: /[^aáiıeoóuú]$/gi };

  if (buwinlar.length === 1) {
    return qamawma && !!buwinlar[0].match(basi) && !!buwinlar[0].match(aqiri);
  }

  buwinlar.forEach(buwin => {
    qamawma = qamawma && !!buwin.match(basi) && !!buwin.match(aqiri);
  });

  return qamawma;
};

/**
 * Buwınnıń juwan yaki jińishkeligin anıqlaw
 * @param buwin Tekseriletuǵın buwın
 * @returns {boolean} Ekilik logikalıq operator qaytaradı (Jalǵan ya Shın)
 */
export const juwanBuwinba = (buwin: string): boolean => {
  if (!!buwin.match(/[áieóú]/gi)) {
    return false;
  }
  return true;
};
