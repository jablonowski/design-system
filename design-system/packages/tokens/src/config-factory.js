/**
 * Creates a Style Dictionary config for a given customer.
 * @param {string} customer – folder name under src/ (e.g. 'ds-bank', 'ng-bank')
 */
function createConfig(customer) {
  const prefix = `dist/${customer}`;
  return {
    source: [`src/${customer}/tokens/**/*.json`],
    platforms: {
      css: {
        prefix: 'ds',
        transformGroup: 'css',
        buildPath: `${prefix}/css/`,
        files: [
          {
            destination: 'variables.css',
            format: 'css/variables',
            options: { outputReferences: true },
          },
        ],
      },
      scss: {
        transformGroup: 'scss',
        buildPath: `${prefix}/scss/`,
        files: [
          {
            destination: '_variables.scss',
            format: 'scss/variables',
            options: { outputReferences: true },
          },
        ],
      },
      js: {
        transformGroup: 'js',
        buildPath: `${prefix}/js/`,
        files: [
          {
            destination: 'tokens.js',
            format: 'javascript/es6',
          },
        ],
      },
      ts: {
        transformGroup: 'js',
        buildPath: `${prefix}/ts/`,
        files: [
          {
            destination: 'tokens.ts',
            format: 'javascript/es6',
          },
          {
            destination: 'tokens.d.ts',
            format: 'typescript/es6-declarations',
          },
        ],
      },
      json: {
        transformGroup: 'js',
        buildPath: `${prefix}/json/`,
        files: [
          {
            destination: 'tokens.json',
            format: 'json/nested',
          },
        ],
      },
    },
  };
}

module.exports = { createConfig };
