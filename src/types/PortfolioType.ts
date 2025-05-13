export enum PORTFOLIO_CATEGORY_TYPE {
  UNSPECIFIED = 0,
  CASE_STUDIES = 1,
  ESG_REPORT = 2,
  INNOVATION_HUB = 3,
}

export enum EPortfolioState {
  UNSPECIFIED = 0,
  PUBLIC = 1,
  PRIVATE = 2,
  DRAFT = 3,
  DELETED = 4,
}

export interface IESGCtx {
  dataDetail: IPortfolio | undefined;
}

export interface ICaseStudyDetailContext {
  portfolioData: IPortfolio | undefined;
}

export interface IInnovationHubDetailContext {
  portfolioData: IPortfolio | undefined;
}

export interface IPortfolioCategory {
  created_by: {
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
  };
  created_date: number;
  description_en: string;
  description_vi: string;
  id: string;
  last_modified_date: number;
  name_en: string;
  name_vi: string;
  no_of_portfolio: number;
  slug_en: string;
  slug_vi: string;
  state: number;
  type: number;
}

export interface ICategoryPortfolioRes extends IPortfolioCategory {
  key: string;
}

export interface IResCategoryPortfolio {
  created_date: number;
  description_en: string;
  description_vi: string;
  id: string;
  last_modified_date: number;
  name_en: string;
  name_vi: string;
  no_of_portfolio: number;
  slug_en: string;
  slug_vi: string;
  state: number;
  type: number;
}
export interface IPortfolio {
  banner: string;
  category: IResCategoryPortfolio;
  created_by: {
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
  };
  created_date: number;
  featured: boolean;
  highlight: {
    content_en: string;
    content_vi: string;
    id: string;
    pdf: string;
    picture: string;
  };
  id: string;
  insides: {
    cover_image: string;
    description_en: string;
    description_vi: string;
    heading_en: string;
    heading_vi: string;
    id: string;
    text_boxes: {
      description_en: string;
      description_vi: string;
      id: string;
      title_en: string;
      title_vi: string;
    }[];
  }[];
  introduction: {
    content_en: string;
    content_vi: string;
    id: string;
    picture: string;
  };
  languages: number[];
  last_modified_by: {
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
  };
  last_modified_date: number;
  main_content: {
    description_en: string;
    description_vi: string;
    heading_en: string;
    heading_vi: string;
    id: string;
    sections: {
      cover: string;
      id: string;
      title_en: string;
      title_vi: string;
    }[];
  };
  name_en: string;
  name_vi: string;
  short_description_en: string;
  short_description_vi: string;
  slug_en: string;
  slug_vi: string;
  state: number;
  tags: {
    created_by: {
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
    };
    created_date: number;
    description: string;
    id: number;
    name: string;
    no_of_post: number;
    slug: string;
  }[];
  thumbnail: string;
}

export interface IPortfolioDetail {
  created_date: number;
  description_en: string;
  description_vi: string;
  id: string;
  last_modified_date: number;
  name_en: string;
  name_vi: string;
  no_of_portfolio: number;
  slug_en: string;
  slug_vi: string;
  state: number;
  type: number;
}

export interface IPortfolioRes extends IPortfolio {
  key: string;
}

export enum UPSERT_PORTFOLIO_TYPE_FORM {
  UNSPECIFIED = 'unspecified',
  CASE_STUDY = 'case_studies',
  ESG_REPORT = 'esg_report',
  INNOVATION_HUB = 'innovation_hub',
}

export enum UPSERT_PORTFOLIO_CATEGORY_TYPE_FORM {
  CASE_STUDY = 'case-study',
  ESG_REPORT = 'esg-report',
  INNOVATION_HUB = 'innovation-hub',
}

export const UPSERT_PORTFOLIO_TYPE_FILTER: { [key: string]: string } = {
  caseStudy: 'case_studies',
  esgReport: 'esg_report',
  innovationHub: 'innovation_hub',
};

export const UPSERT_PORTFOLIO_CATEGORY_TYPE_FILTER: { [key: string]: string } = {
  caseStudy: 'case-study',
  esgReport: 'esg-report',
  innovationHub: 'innovation-hub',
};

export const UPSERT_PORTFOLIO_TYPE_OPTION: { [key: number]: string } = {
  0: 'unspecified',
  // 1: 'caseStudy',
  // 2: 'esgReport',
  // 3: 'innovationHub',
  1: 'case_studies',
  2: 'esg_report',
  3: 'innovation_hub',
};

export interface IPortfolioTableData {
  key: string;
  // name_portfolio: string;
  name_en: string;
  // category: string;
  category: IResCategoryPortfolio;
  category_en: string;
  tags: string;
  type: number;
  author: string;
  state: number;
  languages: number[];
  created_date: number;
  portfolioData: IPortfolio;
}

export interface IUpsertPortfolioRequest {
  banner: string;
  category_id: string;
  featured: boolean;
  highlight: {
    content_en: string;
    content_vi: string;
    id: string;
    pdf: string;
    picture: string;
  };
  id: string;
  insides: {
    cover_image: string;
    description_en: string;
    description_vi: string;
    heading_en: string;
    heading_vi: string;
    id: string;
    text_boxes: {
      description_en: string;
      description_vi: string;
      id: string;
      title_en: string;
      title_vi: string;
    }[];
  }[];
  introduction: {
    content_en: string;
    content_vi: string;
    id: string;
    picture: string;
  };
  languages: number[];
  main_content: {
    description_en: string;
    description_vi: string;
    heading_en: string;
    heading_vi: string;
    id: string;
    sections: {
      cover: string;
      id: string;
      title_en: string;
      title_vi: string;
    }[];
  };
  name_en: string;
  name_vi: string;
  short_description_en: string;
  short_description_vi: string;
  slug_en: string;
  slug_vi: string;
  state: number;
  tags: string[];
  thumbnail: string;
  type: number;
}

export interface IUpdatePortfoliosState {
  portfolio_ids: string[];
  state: number;
}

export interface IDownloadPortfolioForm {
  fullName?: string;
  role?: string;
  email?: string;
  company?: string;
  phone?: string;
}
