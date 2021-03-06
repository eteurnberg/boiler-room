import BoilerplateProject from '@/boilerplate-builder/BoilerplateProject';
import NodePackageGenerator from '@/generators/node/nodePackageGenerator';
import { ReadmeTemplate } from '@/templates/readme.template';
import Template from '@/templates/Template';
import { BoilerOptions } from '@/types/BoilerOptions';

export default class BoilerplateBuilder {
  projectOptions: BoilerOptions;

  constructor(options: BoilerOptions) {
    this.projectOptions = options;
  }

  async build(): Promise<void> {
    // Create templates based on options
    const templates = this.setupTemplates(this.projectOptions);

    // Create boilerplate project
    const project = new BoilerplateProject(this.projectOptions, templates);

    // Write files
    try {
      await project.write();
      const nodePackage = new NodePackageGenerator(this.projectOptions);
    } catch (err) {
      console.error('There was an error building the project: ', err.message);
      throw err;
    }
  }

  /**
   * Creates all file templates for a project, based on the chosen options.
   *
   * @param options {BoilerOptions} Boilerplate project options object
   *
   * @returns {Template[]} List of template files created.
   */
  setupTemplates(options: BoilerOptions): Template[] {
    const templates: Template[] = [];
    // TODO - for now only creates the readme
    templates.push(new ReadmeTemplate());
    return templates;
  }
}
