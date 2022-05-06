import * as childProcess from 'child_process';
import * as fs from 'fs';
// import * as fse from 'fs-extra';

/**
 * Run the given shell command, piping the shell process's `stdin`, `stdout`, and `stderr` to that of the current
 * process. Returns contents of `stdout`.
 */
function run(cmd: string, options?: childProcess.ExecSyncOptions): string | Buffer {
  return childProcess.execSync(cmd, { stdio: 'inherit', ...options });
}

run('yarn rollup -c rollup.npm.config.js');

// We want to distribute the README because it contains the MIT license blurb from Sucrase and Rollup
fs.copyFileSync('src/buildPolyfills/README.md', 'build/cjs/buildPolyfills/README.md');
fs.copyFileSync('src/buildPolyfills/README.md', 'build/esm/buildPolyfills/README.md');

// Because we import our polyfills from `@sentry/utils/cjs/buildPolyfills` and `@sentry/utils/esm/buildPolyfills` rather
// than straight from `@sentry/utils` (so as to avoid having them in the package's public API), when tests run, they'll
// expect to find `cjs` and `esm` at the root level of the repo.
fs.symlinkSync('build/cjs', 'cjs');
fs.symlinkSync('build/esm', 'esm');

// fse.copySync('build/cjs/buildPolyfills', '.');
// fse.copySync('build/esm/buildPolyfills', '.');
// fs.writeFileSync(
//   'build/cjs/buildPolyfills/__WHY_THIS_FOLDER_EXISTS',
//   '**Dummy copy of polyfills (copied from `build/cjs/buildPolyfills`) which is necessary for tests.**',
// );
// fs.writeFileSync(
//   'build/esm/buildPolyfills/__WHY_THIS_FOLDER_EXISTS',
//   '**Dummy copy of polyfills (copied from `build/esm/buildPolyfills`) which is necessary for tests.**',
// );

//
//   (
//   ' && cp src/buildPolyfills/README.md build/buildPolyfills && cp -r build/buildPolyfills . && echo "**Dummy copy of polyfills (copied from \\`build/buildPolyfills\\`) necessary for tests.**" > buildPolyfills/why-is-this-here?.md',
// );
