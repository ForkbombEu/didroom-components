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

const ColorOptions = 'primary accent'.split(' ');
export const ColorArgTypes = {
  options: ColorOptions,
  description: 'Color of the button',
  defaultValue: 'primary',
  default: 'primary',
  control: { type: 'inline-radio' },
};
export type Color = (typeof ColorOptions)[number];
