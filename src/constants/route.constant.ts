const publicRoutePath = '';
const privateRoutePath = '/admin';
const CONTENT_BASE_URL = `${privateRoutePath}/content-management`;
const MEDIA_BASE_URL = `${privateRoutePath}/media`;
const COMMUNICATION_BASE_URL = `${privateRoutePath}/communications`;
const AUTH_URL = `${publicRoutePath}/auth`;

export const PublicRoute = {
  LOGIN: `${AUTH_URL}/login`,
  FORBIDDEN: `${publicRoutePath}/403`,

  HIRING: `${publicRoutePath}/hiring`,

  HOME: `${publicRoutePath}/`,

  SERVICES: `${publicRoutePath}/services`,
  SERVICE_DC: `${publicRoutePath}/services/digital-consulting`,
  SERVICE_SD: `${publicRoutePath}/services/software-development`,
  SERVICE_DDC: `${publicRoutePath}/services/dedicated-development-center`,
  SERVICE_STS: `${publicRoutePath}/services/software-testing-services`,

  SOLUTIONS: `${publicRoutePath}/solutions`,
  SOLUTION_HCM: `${publicRoutePath}/solutions/HCM`,
  SOLUTION_ADAS: `${publicRoutePath}/solutions/advanced-driver-assistance-systems`,

  INDUSTRIES: `${publicRoutePath}/industries`,
  INDUSTRY_AUTOMOTIVE: `${publicRoutePath}/industries/automotive`,
  INDUSTRY_EDUTECH: `${publicRoutePath}/industries/edutech`,
  INDUSTRY_FINTECH: `${publicRoutePath}/industries/fintech`,
  INDUSTRY_RETAILS: `${publicRoutePath}/industries/retails`,
  INDUSTRY_LOGISTICS: `${publicRoutePath}/industries/logistics`,
  INDUSTRY_SMART_IOT: `${publicRoutePath}/industries/smart-iot`,

  RESOURCES: `${publicRoutePath}/resources`,
  RESOURCE_CASE_STUDIES: `${publicRoutePath}/resources/case-studies`,
  RESOURCE_INSIGHTS: `${publicRoutePath}/resources/insights`,
  RESOURCE_INSIGHTS_SUB_CATEGORY: `${publicRoutePath}/resources/insights/sub-category`,
  RESOURCE_INSIGHTS_DETAIL: `${publicRoutePath}/resources/insights/detail`,
  RESOURCE_INSIGHTS_TOPIC: `${publicRoutePath}/resources/insights/topic`,
  RESOURCE_INNOVATION_HUB: `${publicRoutePath}/resources/innovation-hub`,

  COMPANY: `#`,
  COMPANY_ABOUT: `#`,

  FAQS: `#`,
  QUOTESFORM: `${publicRoutePath}/quotes/request`,
};

export const PrivateRoute = {
  HOME: `${privateRoutePath}`,

  //content management
  CATEGORIES: `${CONTENT_BASE_URL}/categories`,
  POSTS: `${CONTENT_BASE_URL}/posts`,
  EVENTS: `${CONTENT_BASE_URL}/events`,
  TAGS: `${CONTENT_BASE_URL}/tags`,
  PORTFOLIOS: `${CONTENT_BASE_URL}/portfolios`,
  PORTFOLIO_UPSERT: `${CONTENT_BASE_URL}/portfolios/upsert`,

  //media
  GALLERY: `${MEDIA_BASE_URL}/gallery`,
  GALLERY_CREATE: `${MEDIA_BASE_URL}/gallery/create`,
  GALLERY_EDIT: `${MEDIA_BASE_URL}/gallery/edit`,
  VIDEO: `${MEDIA_BASE_URL}/video`,

  //communication
  FORM_SUBMISSIONS: `${COMMUNICATION_BASE_URL}/form-submissions`,
};

export const getSiteTitleByPath = (pathname: string): string => {
  switch (pathname) {
    // Public Routes
    case PublicRoute.LOGIN:
      return 'Login';
    case PublicRoute.FORBIDDEN:
      return '403';
    case PublicRoute.HOME:
      return 'Home';
    case PublicRoute.SERVICES:
      return 'Services';
    case PublicRoute.SERVICE_DC:
      return 'Digital Consulting';
    case PublicRoute.SERVICE_SD:
      return 'Software Development';
    case PublicRoute.SERVICE_DDC:
      return 'Dedicated Development Center';
    case PublicRoute.SERVICE_STS:
      return 'Software Testing Services';
    case PublicRoute.SOLUTIONS:
      return 'Solutions';
    case PublicRoute.SOLUTION_HCM:
      return 'HCM';
    case PublicRoute.SOLUTION_ADAS:
      return 'ADAS';
    case PublicRoute.INDUSTRIES:
      return 'Industries';
    case PublicRoute.INDUSTRY_AUTOMOTIVE:
      return 'Automotive';
    case PublicRoute.INDUSTRY_EDUTECH:
      return 'Edutech';
    case PublicRoute.INDUSTRY_FINTECH:
      return 'Fintech';
    case PublicRoute.INDUSTRY_RETAILS:
      return 'Retails';
    case PublicRoute.INDUSTRY_LOGISTICS:
      return 'Logistics';
    case PublicRoute.INDUSTRY_SMART_IOT:
      return 'Smart IoT';
    case PublicRoute.RESOURCES:
      return 'Resources';
    case PublicRoute.RESOURCE_CASE_STUDIES:
      return 'Case Studies';
    case PublicRoute.RESOURCE_INSIGHTS:
      return 'Insights';
    case PublicRoute.RESOURCE_INSIGHTS_SUB_CATEGORY:
      return 'Insights Sub Category';
    case PublicRoute.RESOURCE_INSIGHTS_DETAIL:
      return 'Insights Detail';
    case PublicRoute.RESOURCE_INSIGHTS_TOPIC:
      return 'Insights Topic';
    case PublicRoute.RESOURCE_INNOVATION_HUB:
      return 'Innovation Hub';
    case PublicRoute.COMPANY:
      return 'Company';
    case PublicRoute.COMPANY_ABOUT:
      return 'About';
    case PublicRoute.FAQS:
      return 'FAQs';

    // Private Routes
    case PrivateRoute.HOME:
      return 'Home';
    case PrivateRoute.CATEGORIES:
      return 'Categories';
    case PrivateRoute.POSTS:
      return 'Posts';
    case PrivateRoute.EVENTS:
      return 'Events';
    case PrivateRoute.TAGS:
      return 'Tags';
    case PrivateRoute.PORTFOLIOS:
      return 'Portfolios';
    case PrivateRoute.PORTFOLIO_UPSERT:
      return 'Portfolios';
    case PrivateRoute.GALLERY:
      return 'Gallery';
    case PrivateRoute.GALLERY_CREATE:
      return 'Gallery Create';
    case PrivateRoute.GALLERY_EDIT:
      return 'Gallery Edit';
    case PrivateRoute.VIDEO:
      return 'Video';
    case PrivateRoute.FORM_SUBMISSIONS:
      return 'Form Submissions';
    default:
      return '';
  }
};
