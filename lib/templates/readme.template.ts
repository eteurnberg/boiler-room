import Template from '@templates/Template';
import dedent from 'dedent';

import { BoilerOptions } from '@/types/BoilerOptions';

export class ReadmeTemplate implements Template {
  generate(options: BoilerOptions): string {
    const template = dedent`# ${options.meta.project.name}

    ${options.meta.project.description}

    Written by: ${options.meta.author.name}

    ## License

    ${options.meta.project.license}
    `;

    return template + '\n';
  }

  getFileName(): string {
    return 'README.md';
  }
}
