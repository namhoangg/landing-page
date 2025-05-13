import { ICreatedBy } from '.';

export interface ImageFormValue {
  id: number;
  image: string;
  position: number;
}

export interface IGalleryAdminRes {
  cover_image: string;
  cover_image_url: string;
  created_by: ICreatedBy;
  created_date: number;
  id: string;
  images: IResImage[];
  last_modified_by: ICreatedBy;
  last_modified_date: number;
  name_en: string;
  name_vi: string;
  slug: string;
  status: number;
  // updated
  organized_by: number;
}

export interface IResImage {
  album_id: number;
  created_date: number;
  id: number;
  image: string;
  image_url: string;
  last_modified_date: number;
  position: number;
}

export interface IGalleryAdminDataSource extends IGalleryAdminRes {
  key?: string;
}
