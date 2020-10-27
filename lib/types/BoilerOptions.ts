export type BoilerOptions = {
  meta: {
    project: ProjectMetaData;
    author: AuthorMetaData;
  };
  project: ProjectOptions;
};

export type ProjectType = 'bare' | 'ts-basic' | 'ts-cli' | 'ts-micro-service';

type ProjectMetaData = {
  name: string;
  description: string;
  version: string;
  license: string;
  repository: string;
};

type AuthorMetaData = {
  name: string;
};

type ProjectOptions = {
  type: ProjectType;
};
