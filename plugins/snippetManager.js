const
  fs = require('fs'),
  path = require('path'),
  marked = require('marked'),
  MarkdownIt = require('markdown-it'),
  color = require('colors/safe');

const SNIPPET_REGEX = /(\[snippet=)[a-zA-Z0-9-]+\]/g;


module.exports = {

  process (filename, data) {
    let
      self = this,
      fileString = data.contents.toString(),
      match = fileString.match(SNIPPET_REGEX),
      presentLanguages = [],
      md = new MarkdownIt();

    if(match) {
      match.forEach(el => {
        let
          name = el.split('=')[1].slice(0, -1),
          fullPath = path.join(__dirname, '../src/' + filename.split('/').slice(0, -1).join('/') + '/snippets'),
          code = '',
          filenames = fs.readdirSync(fullPath);

        filenames.forEach(file => {

          if (file.split('.')[0] === name && file.substr(-8) !== 'test.yml') {
            presentLanguages.push(file.split('.')[1]);
            let fileContent = fs.readFileSync(fullPath + '/' + file, 'utf8');
            const lng = file.split('.')[1];
            const languageName = lng === 'js' ? 'javascript' : lng;

            code += '``` ' + languageName + '\n' + fileContent + '\n```\n';
          }

        });
        const markdown = md.render(code);
        fileString = fileString.replace(el, markdown);
      });
    }
    return {
      has_code_example : (match) ? true : false,
      fileContent: new Buffer(fileString)
    };
  },

  report (args) {
    console.log(color.yellow('[TO-DO] =>'), args);
  }
};
