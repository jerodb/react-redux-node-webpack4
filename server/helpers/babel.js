require('@babel/register')({
  plugins: [
    [
      'css-modules-transform',
      {
        generateScopedName: '[hash:8]',
        extensions: ['.css', '.scss'],
      },
    ],
  ],
  presets: ['@babel/preset-env', '@babel/preset-react'],
})
