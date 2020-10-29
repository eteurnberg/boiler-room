import { promises as fs } from 'fs';
import Template from 'lib/templates/Template';
import { BoilerOptions } from 'lib/types/BoilerOptions';

export interface WriteableFile<T extends Template> {
  fileName: string;
  fileTemplate: T;
  writeToFile(): void;
}

export class BoilerplateFile<T extends Template> implements WriteableFile<T> {
  fileName: string;
  fileTemplate: T;
  fileContent: Uint8Array;

  constructor(template: T, options: BoilerOptions) {
    this.fileName = template.getFileName();
    this.fileTemplate = template;
    this.fileContent = new Uint8Array(Buffer.from(this.fileTemplate.generate(options)));
  }

  async writeToFile(): Promise<void> {
    try {
      await fs.writeFile(this.fileName, this.fileContent);
    } catch (err) {
      throw err;
    }

    console.log(`Successfully created file: ${this.fileName}`);
  }
}
