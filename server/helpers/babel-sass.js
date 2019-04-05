const sass = require('node-sass')

const processSass = (data, filename) => {
  const result = sass.renderSync({
    data,
    file: filename,
  }).css
  return result.toString('utf8')
}

require('@babel/register')({
  plugins: [
    [
      'css-modules-transform',
      {
        preprocessCss: processSass,
        generateScopedName: '[hash:8]',
        extensions: ['.css', '.scss'],
      },
    ],
  ],
  presets: ['@babel/preset-env', '@babel/preset-react'],
})
