const GITHUB_USER = 'eteurnberg';

module.exports = {
  name: prompt('name', config.options.meta.project.name),
  version: '0.1.0',
  description: prompt('description'),
  main: prompt('entry point', 'index.js'),
  bin: 'test',
  scripts: prompt('test command', 'test script'),
  repository: function () {
    return {
      type: 'git',
      url: 'https://github.com/' + GITHUB_USER + '/' + config.options.meta.project.name + '.git',
    };
  },
  homepage: 'https://github.com/' + GITHUB_USER + '/' + config.options.meta.project.name,
  keywords: prompt(function (val) {
    return val.split(/\s+/);
  }),
  license: config.options.project.license,
  author: `${config.options.meta.author.name} <${config.options.meta.author.email}>`,
};
