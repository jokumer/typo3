import terser from '@rollup/plugin-terser';
import { createRequire } from 'node:module';

export default {
  input: 'node_modules/lodash-es/lodash.js',
  output: {
    file: '../typo3/sysext/backend/Resources/Public/JavaScript/Contrib/lodash-es.js',
    format: 'esm',
  },
  plugins: [
    terser({ ecma: 8 }),
    {
      name: 'externals',
      resolveId: (source, importer) => {
        if (source.startsWith('.') && importer) {
          const require = createRequire(import.meta.url);
          const path = require('path');
          return require.resolve(path.resolve(path.dirname(importer), source))
        }
        return null
      }
    }
  ],
};
