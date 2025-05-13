import { PublicRoute } from '@/constants';
import { MetadataRoute } from 'next';

const BASE_URL = 'http://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}${PublicRoute.HOME}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      // priority: 1,
    },
    {
      url: `${BASE_URL}${PublicRoute.FORBIDDEN}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      // priority: 1,
    },
    {
      url: `${BASE_URL}${PublicRoute.SERVICES}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      // priority: 1,
    },
    {
      url: `${BASE_URL}${PublicRoute.SERVICE_DC}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      // priority: 1,
    },
    {
      url: `${BASE_URL}${PublicRoute.SERVICE_SD}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      // priority: 1,
    },
    {
      url: `${BASE_URL}${PublicRoute.SERVICE_DDC}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      // priority: 1,
    },
    {
      url: `${BASE_URL}${PublicRoute.SERVICE_STS}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      // priority: 1,
    },

    {
      url: `${BASE_URL}${PublicRoute.SOLUTIONS}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      // priority: 1,
    },

    {
      url: `${BASE_URL}${PublicRoute.SOLUTION_HCM}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      // priority: 1,
    },

    {
      url: `${BASE_URL}${PublicRoute.SOLUTION_ADAS}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      // priority: 1,
    },

    {
      url: `${BASE_URL}${PublicRoute.INDUSTRIES}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      // priority: 1,
    },

    {
      url: `${BASE_URL}${PublicRoute.INDUSTRY_AUTOMOTIVE}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      // priority: 1,
    },

    {
      url: `${BASE_URL}${PublicRoute.INDUSTRY_EDUTECH}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      // priority: 1,
    },

    {
      url: `${BASE_URL}${PublicRoute.INDUSTRY_FINTECH}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      // priority: 1,
    },

    {
      url: `${BASE_URL}${PublicRoute.INDUSTRY_RETAILS}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      // priority: 1,
    },

    {
      url: `${BASE_URL}${PublicRoute.INDUSTRY_LOGISTICS}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      // priority: 1,
    },

    {
      url: `${BASE_URL}${PublicRoute.INDUSTRY_SMART_IOT}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      // priority: 1,
    },

    {
      url: `${BASE_URL}${PublicRoute.RESOURCES}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      // priority: 1,
    },
    {
      url: `${BASE_URL}${PublicRoute.RESOURCE_CASE_STUDIES}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
    },
    {
      url: `${BASE_URL}${PublicRoute.RESOURCE_INSIGHTS}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
    },

    {
      url: `${BASE_URL}${PublicRoute.RESOURCE_INSIGHTS_SUB_CATEGORY}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
    },

    {
      url: `${BASE_URL}${PublicRoute.RESOURCE_INSIGHTS_DETAIL}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
    },

    {
      url: `${BASE_URL}${PublicRoute.RESOURCE_INSIGHTS_TOPIC}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
    },

    {
      url: `${BASE_URL}${PublicRoute.RESOURCE_INNOVATION_HUB}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
    },

    {
      url: `${BASE_URL}${PublicRoute.COMPANY}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
    },

    {
      url: `${BASE_URL}${PublicRoute.COMPANY_ABOUT}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
    },

    {
      url: `${BASE_URL}${PublicRoute.COMPANY_OUR_CULTURE}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
    },

    {
      url: `${BASE_URL}${PublicRoute.COMPANY_OUR_ESG}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
    },

    {
      url: `${BASE_URL}${PublicRoute.COMPANY_OUR_ESG_REPORT}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
    },

    {
      url: `${BASE_URL}${PublicRoute.COMPANY_CAREER}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
    },

    {
      url: `${BASE_URL}${PublicRoute.COMPANY_CONTACT}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
    },

    {
      url: `${BASE_URL}${PublicRoute.COMPANY_MEDIA_CENTER}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
    },

    {
      url: `${BASE_URL}${PublicRoute.COMPANY_MEDIA_CENTER_NEWS}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
    },

    {
      url: `${BASE_URL}${PublicRoute.COMPANY_MEDIA_CENTER_NEWS_CATEGORY}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
    },

    {
      url: `${BASE_URL}${PublicRoute.COMPANY_MEDIA_CENTER_EVENTS}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
    },

    {
      url: `${BASE_URL}${PublicRoute.COMPANY_MEDIA_CENTER_GALLERY}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
    },

    {
      url: `${BASE_URL}${PublicRoute.ISMS_POLICY}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
    },

    {
      url: `${BASE_URL}${PublicRoute.FAQS}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
    },

    {
      url: `${BASE_URL}${PublicRoute.PRIVACY_POLICY}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
    },

    {
      url: `${BASE_URL}${PublicRoute.EVENTS}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
    },

    {
      url: `${BASE_URL}${PublicRoute.PRIVACY}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
    },

    {
      url: `${BASE_URL}${PublicRoute.GALLERY}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
    },

    {
      url: `${BASE_URL}${PublicRoute.CATEGORY}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
    },

    {
      url: `${BASE_URL}${PublicRoute.GALLERYDETAIL}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
    },
  ];
}
