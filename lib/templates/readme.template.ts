import { BoilerOptions } from 'lib/types/BoilerOptions';
import Template from './Template';

class ReadmeTemplate implements Template {
  static generate(options: BoilerOptions): string {
    return `
    # ${options.meta.project.name}

    ${options.meta.project.description}

    Written by: ${options.meta.author.name}

    ## License

    ${options.meta.project.license}
    `;
  }
}
