import { ICreatedBy, ITagRes } from '.';

export interface IEventAdminRes {
  category: {
    children: string[];
    created_date: number;
    description_en: string;
    description_vi: string;
    id: string;
    last_modified_date: number;
    location: number;
    name_en: string;
    name_vi: string;
    no_of_posts: number;
    parent_id: string;
    slug_en: string;
    slug_vi: string;
    state: number;
    thumbnail: string;
  };
  content_en: string;
  content_vi: string;
  created_date: number;
  description_en: string;
  description_vi: string;
  end_date: number;
  event_status: number;
  id: string;
  last_modified_date: number;
  slug_en: string;
  slug_vi: string;
  start_date: number;
  state: number;
  thumbnail_en: string;
  thumbnail_vi: string;
  title_en: string;
  title_vi: string;
  tags: ITagRes[];
  created_by: ICreatedBy;
  start_time: string;
  end_time: string;
  location: string;
  featured: boolean;
}

export interface IEventDataSource extends IEventAdminRes {
  key: string;
}
