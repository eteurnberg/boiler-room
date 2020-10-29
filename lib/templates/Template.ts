import { BoilerOptions } from 'lib/types/BoilerOptions';

export default interface Template {
  generate(options: BoilerOptions): string;
  getFileName(): string;
}
