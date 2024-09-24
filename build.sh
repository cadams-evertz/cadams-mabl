#!/bin/bash
set -e

echo === Running unit tests... ===
npm run test

echo -e "\n=== Version Check ==="
echo - Have you updated the intended version number in package.json?
echo Press enter to continue
read

echo === Creating js bundle... ===
npm run bundle

echo === Creating documentation... ===
npm run typedoc

echo -e "\n=== How to publish ==="
echo - Commit the generated files in ./doc to github. Github page should be generated automatically
echo - Upload ./dist/bundle.js as a release and create tag of the matching release version
