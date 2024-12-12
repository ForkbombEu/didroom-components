const SizeOptions = ['xs', 's', 'm', 'l', 'xl', '2xl'] as const;
export const SizeArgTypes = {
  defaultValue: 'm',
  options: SizeOptions,
  control: { type: 'select' },
};
export type Size = (typeof SizeOptions)[number];

const ShapeOptions = ['round', 'square'] as const;
export const ShapeArgTypes = {
  options: ShapeOptions,
  control: { type: 'inline-radio' },
};
export type Shape = (typeof ShapeOptions)[number];

const ColorOptions = ['primary', 'accent', 'success', 'warning', 'error'] as const;
export const ColorArgTypes = {
  options: ColorOptions,
  description: 'Color of the button',
  defaultValue: 'primary',
  default: 'primary',
  control: { type: 'inline-radio' },
};
export type Color = (typeof ColorOptions)[number];

const GapOptions = [0, 2, 4, 8] as const;

export type Gap = (typeof GapOptions)[number];