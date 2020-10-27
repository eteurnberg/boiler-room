import { writeFile } from 'fs';
import Template from 'lib/templates/Template';
import { BoilerOptions } from 'lib/types/BoilerOptions';
import { BoilerplateFile } from './BoilerplateFile';

class BoilerplateProject {
  files: BoilerplateFile[];

  constructor(options: BoilerOptions, templates: Template[]) {
    this.files = [];
  }

  write(): void {
    for (const boilerplateFile of this.files) {
      const fileContent = new Uint8Array(Buffer.from(boilerplateFile.content));
      writeFile(boilerplateFile.fileName, fileContent, (err) => {
        if (err) throw err;
        console.log(`Successfully created ${boilerplateFile.templateType}.`);
      });
    }
  }
}
