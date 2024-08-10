import { getAssetPath } from '@stencil/core';

const iconCache = {};
const requestCache = {};

export async function fetchIcon({ icon }): Promise<{ d: string; fill?: string; stroke?: string }[]> {
  if (iconCache[icon]) {
    return iconCache[icon];
  }
  if (!requestCache[icon]) {
    requestCache[icon] = fetch(getAssetPath(`./assets/${icon}.json`))
      .then(resp => resp.json())
      .catch(() => {
        console.error(`"${icon}" is not a valid name`);
        return '';
      });
  }

  const path = await requestCache[icon];
  iconCache[icon] = path;

  return path;
}