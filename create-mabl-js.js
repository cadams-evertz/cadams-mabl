const fs = require('fs');

const oldCodeLines = fs.readFileSync('./dist/bundle.js').toString().split('\n');
const exportIndex = oldCodeLines.indexOf('export {');
const exportLines = oldCodeLines.slice(exportIndex + 1).map(exportLine => {
  const match = exportLine.match(/([A-Za-z0-9_]*) as ([A-Za-z0-9_]*)/);

  if (match) {
    return `  ${match[2]}: ${match[1]},`;
  }
}).filter(line => line);
const newCodeLines = [
  ...oldCodeLines.slice(0, exportIndex),
  '',
  'const evMablUtils = {',
  ...exportLines,
  '};',
];

fs.writeFileSync('./dist/evMablUtils.js', newCodeLines.join('\n') + '\n');
