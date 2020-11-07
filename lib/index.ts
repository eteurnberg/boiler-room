#!/usr/bin/env node

import 'module-alias/register';

import yargs from 'yargs';

import BoilerplateBuilder from '@/boilerplate-builder';
import { BoilerOptions } from '@/types/BoilerOptions';

const options: BoilerOptions = {
  meta: {
    author: {
      name: 'Emil',
    },
    project: {
      name: 'TestProject',
      description: 'A testing project',
      repository: 'none',
      license: 'None',
      version: '0.0.1',
    },
  },
  project: {
    type: 'bare',
    typescript: true,
  },
};

yargs
  .scriptName('boiler')
  .usage('$0 <cmd> [args]')
  .command(
    'create [app]',
    'welcome ter yargs!',
    (yargs) => {
      yargs.positional('type of app', {
        type: 'string',
        default: 'koa',
        describe: 'type of app to create a boilerplate for',
      });
    },
    async function (argv) {
      const builder = new BoilerplateBuilder(options);
      return await builder.build();
    },
  )
  .options({
    verbose: { type: 'boolean', demandOption: false, alias: 'V' },
    lang: { type: 'string', demandOption: true, alias: 'l' },
  })
  .help().argv;
