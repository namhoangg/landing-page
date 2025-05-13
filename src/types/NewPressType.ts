export interface INewPressRes {
  category: CategoryChildren;
  content_en: string;
  content_vi: string;
  created_date: number;
  description_en: string;
  description_vi: string;
  featured: boolean;
  id: number;
  last_modified_date: number;
  slug_en: string;
  slug_vi: string;
  state: number;
  thumbnail_en: string;
  thumbnail_vi: string;
  title_en: string;
  title_vi: string;
}

export interface CategoryChildren {
  children: string[];
  created_date: number;
  description_en: string;
  description_vi: string;
  id: string;
  last_modified_date: number;
  name_en: string;
  name_vi: string;
  no_of_post: number;
  parent_id: string;
  slug_en: string;
  slug_vi: string;
  state: number;
  thumbnail: string;
}

export interface INewPressDataSource extends INewPressRes {
  key: string;
}
