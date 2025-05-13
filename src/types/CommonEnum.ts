export interface IPathname {
  [key: string]: string | { pathname: string; params: string[]; isPreview?: boolean };
}

export type TPathname = { pathname: string; params: string[]; isPreview?: boolean };

export enum EStatusCategory {
  PUBLISHED = 2,
  HIDDEN = 1,
}

export enum EStatusCategoryQuery {
  PUBLISHED = 'published',
  HIDDEN = 'hidden',
}

export enum ELanguageQuery {
  ENGLISH = 'en',
  VIETNAMESE = 'vi',
}

export enum EStatusPost {
  POST_STATE_PUBLIC = 1,
  POST_STATE_PRIVATE = 2,
  POST_STATE_DRAFT = 3,
  POST_STATE_DELETED = 4,
}

export enum EStatusPostWithUnSpecified {
  POST_STATE_UNSPECIFIED = 0,
  POST_STATE_PUBLIC = 1,
  POST_STATE_PRIVATE = 2,
  POST_STATE_DRAFT = 3,
  POST_STATE_DELETED = 4,
}

export enum EStatusPostQuery {
  POST_STATE_PUBLIC = 'public',
  // POST_STATE_PRIVATE = 'private',
  POST_STATE_DRAFT = 'draft',
}

export enum EStatusEventFilter {
  EVENT_STATE_PUBLIC = 'public',
  EVENT_STATE_DRAFT = 'draft',
}

export enum EActions {
  VIEW = 'VIEW',
  EDIT = 'EDIT',
  DELETE = 'DELETE',
  SHARE = 'SHARE',
  HIDE = 'HIDE',
  UNSPECIFIED = 'UNSPECIFIED',
  DELETE_MUTIPLE = 'DELETE_MUTIPLE',
}

export enum TypeCard {
  ROW = 'row',
  COL = 'col',
}

export enum EEventStatus {
  EVENT_STATUS_UNSPECIFIED = 0,
  EVENT_STATUS_UPCOMING = 1,
  EVENT_STATUS_ONGOING = 2,
  EVENT_STATUS_CLOSED = 3,
}

export enum EEventStatusMutation {
  EVENT_STATUS_UPCOMING = 1,
  EVENT_STATUS_ONGOING = 2,
  EVENT_STATUS_CLOSED = 3,
}

export enum EEventStatusQuery {
  EVENT_STATUS_UPCOMING = 'upcoming',
  EVENT_STATUS_ONGOING = 'ongoing',
  EVENT_STATUS_CLOSED = 'closed',
}

export enum EEventStatusCard {
  upcoming = 1,
  ongoing = 2,
  closed = 3,
}

export enum ESubmissionInquiryEnum {
  PARTNER = 1,
  WORK = 2,
  SUPPORT = 3,
  FEEDBACK = 4,
  ESG_REPORT = 5,
}

export const EContactTitle: { [key: number]: string } = {
  1: 'Mr.',
  2: 'Ms.',
  3: 'Mrs.',
};

export const ESubmissionInquiry: { [key: number]: string } = {
  1: 'partner',
  2: 'work',
  3: 'support',
  4: 'feedback',
  5: 'esg_report',
};

export const EContactRole = {
  1: 'CEO',
  2: 'COO',
  3: 'CFO',
  4: 'CTO',
  5: 'CMO',
  6: 'CHRO',
  7: 'CDO',
  8: 'CPO',
  9: 'CHAIRMAN',
  10: 'DIRECTOR',
  11: 'FOUNDER',
  12: 'PRESIDENT',
  13: 'VICE_PRESIDENT',
  14: 'MANAGER',
  15: 'TEAM_LEADER',
  16: 'ASSISTANT_MANAGER',
  17: 'EXECUTIVE',
  18: 'CONSULTANT',
  19: 'OFFICER',
  20: 'OTHERS',
};

export enum ESubmissionCategory {
  UNSPECIFIED = 0,
  REGISTRATION = 1,
  MESSAGE = 2,
  SUBSCRIPTION = 3,
}

export enum EEventLocation {
  EVENT_LOCATION_UNSPECIFIED = 0,
  EVENT_LOCATION_NEWS_PRESS = 1,
  EVENT_LOCATION_INSIGHTS = 2,
  EVENT_LOCATION_ESGS = 3,
  EVENT_LOCATION_INNOVATION_HUB = 4,
  EVENT_LOCATION_EVENTS = 5,
}

// Use for mutation only to prevent users from selecting the wrong location (Events, Unspecified)
export enum EEventLocationMutation {
  EVENT_LOCATION_NEWS_PRESS = 1,
  EVENT_LOCATION_INSIGHTS = 2,
  EVENT_LOCATION_ESGS = 3,
  EVENT_LOCATION_INNOVATION_HUB = 4,
}

export enum EEventLocationQuery {
  EVENT_LOCATION_NEWS_PRESS = 'newsroom',
  EVENT_LOCATION_INSIGHTS = 'insights',
  EVENT_LOCATION_ESGS = 'esg-article',
}

export enum ENUM_TIME {
  TODAY = 'today',
  YESTERDAY = 'yesterday',
  THIS_WEEK = 'this-week',
  THIS_MONTH = 'this-month',
  CUSTOM = 'custom',
}

export const timeOptions: string[] = [
  ENUM_TIME.TODAY,
  ENUM_TIME.YESTERDAY,
  ENUM_TIME.THIS_WEEK,
  ENUM_TIME.THIS_MONTH,
  ENUM_TIME.CUSTOM,
];

export enum ESorts {
  ASC = 'asc',
  DESC = 'desc',
}

export const STATUS: { [key: number]: string } = {
  0: 'unspecified',
  1: 'public',
  2: 'private',
  3: 'draft',
  4: 'delete',
};

export enum ENUM_LABEL {
  UNSPECIFIED,
  NEW,
  QUALIFIED,
  UNQUALIFIED,
  SOLVE,
  SPAM,
}

export const LABEL_FILTER = {
  new: 'new',
  qualified: 'qualified',
  unqualified: 'unqualified',
  solved: 'solved',
  spam: 'spam',
};

export const labelOptions: number[] = [
  ENUM_LABEL.NEW,
  ENUM_LABEL.QUALIFIED,
  ENUM_LABEL.UNQUALIFIED,
  ENUM_LABEL.SOLVE,
  ENUM_LABEL.SPAM,
];

export enum ELangs {
  EN = 1,
  VI = 2,
}

export enum EACLResources {
  CONTENT = 'BVCorp content',
}

export enum EACLActions {
  VIEW = 'View',
  UPSERT = 'Upsert',
  EXPORT = 'Export',
}

export enum ARTICLE_TYPE {
  UNSPECIFIED = 0,
  NEWS = 1,
  EVENT = 2,
  PORTFOLIO = 3,
}
