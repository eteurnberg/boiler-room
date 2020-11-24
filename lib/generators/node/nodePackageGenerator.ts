import init from 'init-package-json';
import path from 'path';

import { BoilerOptions } from '@/types/BoilerOptions';

const INIT_FILE_NAME = 'NodePackageConfig.js';

type nodePackageConfig = Record<string, unknown> | init.Config | undefined;
type preparedConfig = init.Config | Record<string, unknown>;

export default class NodePackageGenerator {
  initFilePath: string;

  constructor(projectOptions: BoilerOptions) {
    this.initFilePath = path.resolve(__dirname, INIT_FILE_NAME);
    console.log('RESOLVED INIT FILE PATH: ', this.initFilePath);

    const processedConfig = this.processConfig(projectOptions);

    const currentDir = process.cwd();

    init(currentDir, this.initFilePath, processedConfig, (err, data) => {
      if (err) console.log(err);
      else console.log('npm init succesful: ', data);
    });
  }

  private processConfig(options: BoilerOptions): preparedConfig {
    if (options === undefined) return {};

    return {
      options: options,
    };
  }
}
