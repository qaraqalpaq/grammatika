import { it, expect } from 'vitest';

import { buwingaBol } from '../src/buwin';

it('sózdi buwınǵa bóliwi kerek', () => {
  const input = 'qaraqalpaq';

  const result = buwingaBol(input);

  expect(result).toEqual(['qa', 'ra', 'qal', 'paq']);
});
