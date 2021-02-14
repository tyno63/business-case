import {GarageJsonld} from './garage-jsonld';

// export interface HydraView {
//   '@id': string;
//   '@type': string;
//   'hydra:first': string;
//   'hydra:last': string;
//   'hydra:next': string;
// }

export interface GarageCollection {
  'hydra:member': Array<GarageJsonld>;
  'hydra:totalItems': number;
  // 'hydra:view': HydraView;
  'hydra:view': {
    '@id': string;
    '@type': string;
    'hydra:first': string;
    'hydra:last': string;
    'hydra:next'?: string;
    'hydra:previous'?: string;
  };
}
