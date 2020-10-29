import { BoilerOptions } from 'lib/types/BoilerOptions';

import Template from './Template';

export class ReadmeTemplate implements Template {
  generate(options: BoilerOptions): string {
    return `
    # ${options.meta.project.name}

    ${options.meta.project.description}

    Written by: ${options.meta.author.name}

    ## License

    ${options.meta.project.license}
    `;
  }

  getFileName(): string {
    return 'README.md';
  }
}
