const setEnv = () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const fs = require('fs');
  const writeFile = fs.writeFile;
// Configure Angular `environment.ts` file path
  const targetPath = './apps/amplify-share/src/environments/environment.ts';
// Load node modules
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const colors = require('colors');
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const appVersion = require('../../../../package.json').version;
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('dotenv').config({
    path: 'apps/amplify-share/src/environments/.env'
  });
// `environment.ts` file structure
  const envConfigFile = `export const environment = {
  amplify: '${process.env.amplify}',
  production: true,
};
`;
  console.log(colors.magenta('The file `environment.ts` will be written with the following content: \n'));
  console.log(colors.grey(envConfigFile));
  writeFile(targetPath, envConfigFile, (err: any) => {
    if (err) {
      console.error(err);
      throw err;
    } else {
      console.log(colors.magenta(`Angular environment.ts file generated correctly at ${targetPath} \n`));
    }
  });
};

setEnv();
