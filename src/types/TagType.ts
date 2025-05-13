import { ICreatedBy } from '.';

export interface ITagRes {
  created_date: number;
  id: number | string;
  name: string;
  no_of_post: number;
  slug: string;
  created_by: ICreatedBy | null;
  description: string;
  highlighted?: boolean;
}

export interface IDataSourceTag extends ITagRes {
  key: string;
  author: string;
}

export interface ITagArticlesRes {
  category: {
    en_name: string;
    id: string;
    vi_name: string;
  };
  created_date: number;
  en_description: string;
  en_slug: string;
  en_thumbnail: string;
  en_title: string;
  event_status: number;
  id: string;
  last_modified_date: number;
  status: number;
  type: number;
  vi_description: string;
  vi_slug: string;
  vi_thumbnail: string;
  vi_title: string;
}
