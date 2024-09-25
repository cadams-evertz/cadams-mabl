#!/bin/bash
set -e

echo === Running unit tests... ===
npm run test

echo === Running prettier... ===
npm run prettier

echo -e "\n=== Version Check ==="
echo - Have you updated the intended version number in package.json?
echo Press enter to continue
read

echo === Creating js bundle... ===
npm run bundle

echo === Creating evMablUtils.js... ===
npm run create-mabl-js

echo === Creating documentation... ===
npm run typedoc

echo -e "\n=== How to publish ==="
echo - Commit the generated files in ./doc to github. Github page should be generated automatically
echo - Copy and paste ./dist/evMablUtils.js into the bottom section of the common-global-Install_mabl_utils snippet
