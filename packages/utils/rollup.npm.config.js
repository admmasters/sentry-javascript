import * as path from 'path';

import { makeBaseNPMConfig, makeNPMConfigVariants } from '../../rollup/index.js';

const jsPolyfillsBaseConfig = makeBaseNPMConfig({ entrypoints: ['src/jsPolyfills.ts'] });

jsPolyfillsBaseConfig.output.dir = path.join(jsPolyfillsBaseConfig.output.dir, 'jsPolyfills');
jsPolyfillsBaseConfig.output.entryFileNames = 'index.js';

export default [
  // the standard, import-it-straight-from-the-package-like-normal code
  ...makeNPMConfigVariants(makeBaseNPMConfig()),
  // our tslib-like language and CJS/ESM interop helpers, which get imported from `@sentry/utils/jsPolyfills`
  ...makeNPMConfigVariants(jsPolyfillsBaseConfig),
];
