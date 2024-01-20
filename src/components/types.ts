const SizeOptions = 'xs s m l xl'.split(' ');
export const SizeArgTypes = {
  defaultValue: 'm',
  options: SizeOptions,
  control: { type: 'select' },
};
export type Size = (typeof SizeOptions)[number];

const ShapeOptions = 'round square'.split(' ');
export const ShapeArgTypes = {
  options: ShapeOptions,
  control: { type: 'inline-radio' },
};
export type Shape = (typeof ShapeOptions)[number];
