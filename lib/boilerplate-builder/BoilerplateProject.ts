import Template from '@templates/Template';

import { BoilerplateFile } from '@/boilerplate-builder/BoilerplateFile';
import { BoilerOptions } from '@/types/BoilerOptions';

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
