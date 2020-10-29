import Template from 'lib/templates/Template';
import { BoilerOptions } from 'lib/types/BoilerOptions';

import { BoilerplateFile } from './BoilerplateFile';

export default class BoilerplateProject {
  projectFiles: BoilerplateFile<Template>[];

  constructor(options: BoilerOptions, templates: Template[]) {
    this.projectFiles = [];

    templates.forEach((template) => {
      this.projectFiles.push(new BoilerplateFile<Template>(template, options));
    });
  }

  async write(): Promise<void> {
    for (const boilerplateFile of this.projectFiles) {
      try {
        await boilerplateFile.writeToFile();
      } catch (err) {
        throw err;
      }
    }
  }
}
