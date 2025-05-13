import { StaticImageData } from 'next/image';
import { ITagRes } from '.';
import { color } from '@/styles';

export interface IEventRes {
  id: number;
  title: string;
  description: string;
  content: string;
  slug: string;
  thumbnail: string;
}

export interface IEventBannerRes {
  items: {
    id: string;
    url: string;
  }[];
}

export interface ICardProps {
  row?: boolean;
  classNameDescription?: string;
  classNameSubTitle?: string;
  classNameTitle?: string;
  imgSrc?: string | StaticImageData;
  status?: string;
  subTitle?: string;
  title?: string;
  description?: string;
  listTopic?: ITagRes[];
  onClick?: () => void;
  loading?: boolean;
  sizeTags?: 'big' | 'small';
}

export interface ICardStatusProps {
  Upcoming: string;
  Ongoing: string;
  Closed: string;
}

export const ICardStatusEnum = {
  0: 'Unspecified',
  1: 'Upcoming',
  2: 'Ongoing',
  3: 'Closed',
};

export enum EEventState {
  EVENT_STATE_UNSPECIFIED = 0,
  EVENT_STATE_PUBLIC = 1,
  EVENT_STATE_PRIVATE = 2,
  EVENT_STATE_DRAFT = 3,
  EVENT_STATE_DELETED = 4,
}

export interface ITopic {
  src: string;
  content: string;
}

export const EventStatusColor = [color.BLACK, color.YELLOW, color.PINK, color.BLACK];
