
let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss')

mix.js('src/app.js', 'assets').setPublicPath('assets')
  .options({
    processCssUrls: false,
    postCss: [tailwindcss('tailwind.config.js')]
  })