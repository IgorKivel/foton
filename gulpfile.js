var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.copy('semantic/dist/semantic.css', 'public/semantic-ui/css/semantic.css')
        .copy('semantic/dist/semantic.js', 'public/semantic-ui/js/semantic.js')
        .copy('semantic/dist/themes', 'public/semantic-ui/css/themes')
        .copy('semantic/dist/components', 'public/semantic-ui/components');
    mix.copy('node_modules/normalize.css/normalize.css', 'public/css/normalize.css')
});
