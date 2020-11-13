import init from 'init-package-json';
import path from 'path';

const INIT_FILE_NAME = 'defaultNpmInit.json';

type nodePackageConfig = Record<string, unknown> | init.Config | undefined;
type preparedConfig = init.Config | Record<string, unknown>;

export default class nodePackageGenerator {
  initFilePath: string;

  constructor(initConfig: nodePackageConfig) {
    this.initFilePath = path.resolve(__dirname, INIT_FILE_NAME);

    const processedConfig = this.processConfig(initConfig);

    const currentDir = process.cwd();

    init(currentDir, this.initFilePath, processedConfig, (err, data) => {
      // Do stuff
    });
  }

  private processConfig(config: nodePackageConfig): preparedConfig {
    if (config === undefined) return {};
    const processedConfig: Record<string, unknown> = {
      test: 'test',
    };
    return processedConfig;
  }
}
