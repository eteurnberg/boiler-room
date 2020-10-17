#!/usr/bin/env node
import yargs from 'yargs';

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
    function (argv) {
      console.log('hello', argv.name, 'welcome to yargs!');
    },
  )
  .options({
    verbose: { type: 'boolean', demandOption: false, alias: 'V' },
    lang: { type: 'string', demandOption: true, alias: 'l' },
  })
  .help().argv;
