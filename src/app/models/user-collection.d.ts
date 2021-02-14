import {UserJsonld} from './user-jsonld';

// export interface HydraView {
//   '@id': string;
//   '@type': string;
//   'hydra:first': string;
//   'hydra:last': string;
//   'hydra:next': string;
// }

export interface UserCollection {
  'hydra:member': Array<UserJsonld>;
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
