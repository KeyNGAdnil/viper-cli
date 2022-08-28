#! /usr/bin/env node

const program = require('commander');
const download = require('download-git-repo');

program
  .version('1.0.0', '-v,--version')
  .command('init <templateName> <projectName>')
  .action((templateName, projectName) => {
    if (templateName === 'viper-react-app') {
      console.log('clone template ...');
      download(
        'github:KeyNGAdnil/viper-react-app',
        projectName,
        function (err) {
          console.log(err ? 'Error' : 'Success');
        }
      );
    } else {
      console.error('A template name that does not exist');
    }
  });

program.parse(process.argv);
