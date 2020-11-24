export type BoilerOptions = {
  meta: {
    project: ProjectMetaData;
    author: AuthorMetaData;
  };
  project: ProjectOptions;
};

export type ProjectType = 'bare' | 'basic' | 'cli' | 'micro-service';

type ProjectMetaData = {
  name: string;
  description: string;
  version: string;
  license: string;
  repository: string;
};

type AuthorMetaData = {
  name: string;
  email: string;
};

type ProjectOptions = {
  type: ProjectType;
  typescript: boolean;
};
