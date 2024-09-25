#!/bin/bash
set -e

banner() {
  echo -e "\n$(tput setaf 4)$(tput bold)=== $* ===$(tput sgr0)"
}

banner Running prettier...
npm run prettier

banner Creating js bundle...
npm run bundle

banner Running unit tests...
npm run test

banner Creating evMablUtils.js...
npm run create-mabl-js

banner Creating documentation...
npm run typedoc

banner How to publish
echo ""
echo - Commit the generated files in ./doc to github. Github page should be generated automatically
echo - Copy and paste ./dist/evMablUtils.js into the bottom section of the common-global-Install_mabl_utils snippet
