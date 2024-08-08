async function onClick() {
  console.log('zzz onClick 1');
  const evMablUtils = await installMablUtils();
  const resultEl = document.getElementsByTagName('div')[0];
  resultEl.innerText = evMablUtils.test.double(101);
  console.log('zzz onClick 2');
}

async function installMablUtils() {
  if (!window.evMablUtils) {
    console.log("Loading mabl utils...");
    window.evMablUtils = await import('./dist/bundle.js');
  }

  return window.evMablUtils;
}
