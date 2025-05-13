import { ICreatedBy } from './CategoryType';

export interface IFeatureNewPressRes {
  category: Category;
  content_en: string;
  content_vi: string;
  created_by: CreatedBy;
  created_date: number;
  description_en: string;
  description_vi: string;
  featured: boolean;
  id: number;
  last_modified_date: number;
  slug_en: string;
  slug_vi: string;
  state: number;
  tags: Tag[];
  thumbnail_en: string;
  thumbnail_vi: string;
  title_en: string;
  title_vi: string;
}

export interface Category {
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

export interface CreatedBy {
  card_number: string;
  cif: string;
  company_email: string;
  first_name: string;
  id: string;
  image: string;
  image_url: string;
  last_name: string;
  org_id: string;
  org_name: string;
}

export interface Tag {
  created_date: number;
  id: number;
  name: string;
  no_of_post: number;
  slug: string;
  created_by: ICreatedBy | null;
  description: string;
}
