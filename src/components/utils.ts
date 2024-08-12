import { getAssetPath } from '@stencil/core';

const assetCache = {};
const requestCache = {};

export async function fetchAsset<T>({ asset }: { asset: string }): Promise<T> {
  if (assetCache[asset]) {
    return assetCache[asset];
  }
  if (!requestCache[asset]) {
    requestCache[asset] = fetch(getAssetPath(`./assets/${asset}.json`))
      .then(resp => resp.json())
      .catch(() => {
        console.error(`"${asset}" is not a valid name`);
        return '';
      });
  }

  const path = await requestCache[asset];
  assetCache[asset] = path;

  return path;
}
