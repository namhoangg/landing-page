export interface ICategoryRes {
  description_en: string;
  description_vi: string;
  id: string;
  created_date: number;
  last_modified_date: number;
  name_en: string;
  name_vi: string;
  no_of_posts: number;
  parent_id: string;
  slug_en: string;
  slug_vi: string;
  state: number;
  thumbnail: string;
  children: ICategoryRes[] | undefined;
  location?: any;
  parent_name?: string;
  is_system: boolean;
  parent: IParentCategory;
}

export interface IParentCategory {
  id: string;
  name_en: string;
  name_vi: string;
  slug_en: string;
  slug_vi: string;
  description_en: string;
  description_vi: string;
  state: number;
  created_date: number;
  last_modified_date: number;
  no_of_posts: number;
  parent_id: string;
  thumbnail: string;
  children: null;
  location: number;
  created_by: null;
  parent: null;
}

export interface ICategoryDataSource extends ICategoryRes {
  key: string;
  disableUpdateStatus?: boolean;
}

export interface ICreatedBy {
  id: string;
  cif: string;
  org_id: string;
  org_name: string;
  first_name: string;
  last_name: string;
  company_email: string;
  image: string;
  image_url: string;
  card_number: string;
}
