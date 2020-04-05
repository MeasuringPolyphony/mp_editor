import { IRI } from './input/definitions';

export function formIIIFManifest(source: string, identifier: string): IRI {
  switch (source) {
    case 'gallica':
      return '//gallica.bnf.fr/iiif/ark:/' +
        identifier +
        '/manifest.json';
    default:
      return '';
  }
}

//https://gallica.bnf.fr/ark:/12148/btv1b8454675g
export const gallicaRegexp = new RegExp("https?:\/\/gallica\.bnf\.fr\/ark:\/([a-z0-9]+\/[a-z0-9]+)");
