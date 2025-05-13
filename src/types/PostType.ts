import { ICategoryRes, ICreatedBy, ITagRes } from '.';

export enum CATEGORY_LOCATION {
  NEWSROOM = 1,
  INSIGHTS = 2,
  ESG_ARTICLE = 3,
  INNOVATION_HUB = 4,
  EVENTS = 5,
}

export interface IPostsRes {
  category: ICategoryRes;
  content_en: string;
  content_vi: string;
  created_date: number;
  description_en: string;
  description_vi: string;
  featured: boolean;
  id: string;
  last_modified_date: number;
  slug_en: string;
  slug_vi: string;
  state: number;
  tags: ITagRes[];
  thumbnail_en: string;
  thumbnail_vi: string;
  title_en: string;
  title_vi: string;
  start_date: string;
  end_date: string;
  created_by: ICreatedBy;
  type?: string;
}

export interface IPostDataSource extends IPostsRes {
  key: string;
  categoryName?: string;
}
