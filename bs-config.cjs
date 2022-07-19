const { ESLint } = require("eslint");

const JS_FILES = 'js/**/*.js';

module.exports = {
  server: '.',
  ui: false,
  files: [
    {
      match: ['*.html', 'css/**/*.css'],
    },
    {
      match: JS_FILES,
      async fn() {
        try {
          const eslint = new ESLint();
          const results = await eslint.lintFiles(JS_FILES);
          const formatter = await eslint.loadFormatter('stylish');

          if (results.filter(({ messages }) => messages.length).length) {
            console.log(formatter.format(results));
<<<<<<< HEAD
          }
          this.reload();
=======
          } else {
            this.reload();
          }
>>>>>>> 1063da9f3e481fc69d5f7e493d5d4bc127874e93
        } catch (err) {
          process.exitCode = 1;
          console.error(err);
        }
      },
    },
  ],
};
