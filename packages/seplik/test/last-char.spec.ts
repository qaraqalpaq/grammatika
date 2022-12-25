import { it, expect } from 'vitest';

import { lastChar } from '../src/last-char';

it('sózdiń aqırǵı háribin qaytarıwı kerek', () => {
  const input = 'telefon';

  const result = lastChar(input);

  expect(result).toEqual('n');
});
