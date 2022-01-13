// @ts-ignore
import amplify from '../aws-exports';
// @ts-ignore
import packageInfo from '../../../../package.json';

export const environment = {
  production: false,
  amplify,
  version: packageInfo.version,
  buildNumber: 'UNKNOWN',
};
