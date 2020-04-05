import { IRI } from './input/definitions';

export function formIIIFManifest(source: string, identifier: string): IRI {
  switch (source) {
    case 'gallica':
      return '//gallica.bnf.fr/iiif/ark:/' +
        identifier +
        '/manifest.json';
    case 'ecodices':
      return '//www.e-codices.unifr.ch/metadata/iiif/' +
        identifier +
        '/manifest.json';
    default:
      return '';
  }
}

//https://gallica.bnf.fr/ark:/12148/btv1b8454675g
export const gallicaRegexp = new RegExp("https?:\/\/gallica\.bnf\.fr\/ark:\/([a-z0-9]+\/[a-z0-9]+)");
//https://www.e-codices.unifr.ch/en/list/one/bbb/0218
export const ecodicesRegexp = new RegExp("https?:\/\/www\.e-codices\.unifr\.ch\/[a-z]{2}\/list\/one\/([a-z]+)\/([-a-zA-Z0-9]+)");
//https://www.e-codices.unifr.ch/metadata/iiif/bbb-0218/manifest.json
export const ecodicesIIIFRegexp = new RegExp("https?:\/\/www\.e-codices\.unifr\.ch\/metadata\/iiif\/([-a-zA-Z0-9]+)\/manifest\.json")
