export interface Dawislilar {
  readonly barligi: ReadonlyArray<string>;
  readonly juwan: ReadonlyArray<string>;
  readonly jinishke: ReadonlyArray<string>;
  readonly erinlik: ReadonlyArray<string>;
  readonly eziwlik: ReadonlyArray<string>;
  readonly ashiq: ReadonlyArray<string>;
  readonly qisiq: ReadonlyArray<string>;
}

export const dawislilar: Dawislilar = {
  barligi: ['a', 'á', 'i', 'ı', 'e', 'o', 'ó', 'u', 'ú'],

  // Juwan hám jińishke bolıp bóliniwi
  juwan: ['a', 'ı', 'o', 'u'],
  jinishke: ['á', 'i', 'ó', 'ú', 'e'],

  // Erinlik hám eziwlik bolıp bóliniwi
  erinlik: ['o', 'u', 'ú', 'ó'],
  eziwlik: ['a', 'á', 'ı', 'i', 'e'],

  // Ashıq hám qısıq bolıp bóliniwi
  ashiq: ['a', 'á', 'o', 'ó'],
  qisiq: ['ı', 'i', 'u', 'ú', 'e'],
};
