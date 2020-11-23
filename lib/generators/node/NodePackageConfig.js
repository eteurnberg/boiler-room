import init from 'init-package-json';

import { BoilerOptions } from '@/types/BoilerOptions';

const GITHUB_USER = 'eteurnberg';

module.exports = {
  name: prompt('name', options.meta.project.name),
  version: '0.1.0',
  description: prompt('description'),
  main: prompt('entry point', 'index.js'),
  bin: 'test',
  scripts: prompt('test command', 'test script'),
  repository: function () {
    return {
      type: 'git',
      url: 'https://github.com/' + GITHUB_USER + '/' + options.meta.project.name + '.git',
    };
  },
  homepage: 'https://github.com/' + GITHUB_USER + '/' + basename,
  keywords: prompt(function (val) {
    return val.split(/\s+/);
  }),
  license: 'MIT',
  author: 'huang.xinghui <huang.x.hui@gmail.com>',
};
