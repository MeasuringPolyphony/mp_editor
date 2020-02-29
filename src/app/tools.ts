import { IRI } from './input/definitions';

export function formIIIFManifest(source: string, identifier: string): IRI {
  switch (source) {
    case 'gallica':
      return 'https://gallica.bnf.fr/iiif/ark:/' +
        identifier +
        '/manifest.json';
    default:
      return '';
  }
}
