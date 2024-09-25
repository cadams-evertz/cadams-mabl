const esbuild = require("esbuild");
const glob = require('glob');
// const { dependencies, peerDependencies } = require('./package.json');

async function main() {
  const sharedConfig = {
    bundle: true,
    minify: false,
    platform: 'browser',
    format: 'esm',
    // only needed if you have dependencies
    // external: Object.keys(dependencies).concat(Object.keys(peerDependencies)),
  };

  esbuild.build({
    ...sharedConfig,
    entryPoints: ["src/index.ts"],
    outfile: "dist/bundle.js",
  });

  esbuild.build({
    ...sharedConfig,
    entryPoints: await glob.glob('src/**/*.spec.ts'),
    outdir: "dist/test",
  });
}

main();
