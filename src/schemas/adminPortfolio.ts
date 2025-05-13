import { TFunction } from 'i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { LANGS } from '@/constants';
import { dataAdminPortfolio } from '@/data';
import { UPSERT_PORTFOLIO_TYPE_FORM } from '@/types';

const forbiddenChars = /[-/:*?<>|.]/;

export const getUpsertAdminPortfolioSchema = (
  t: TFunction<any, undefined>,
  lang: string,
  type: string,
) => {
  const validateInputByLang = (formLang: string, defaultLang: string) => {
    return formLang === defaultLang
      ? yup
          .string()
          .required(
            lang === LANGS.EN ? dataAdminPortfolio.en.required : dataAdminPortfolio.vi.required,
          )
      : yup.string();
  };

  // const validateInputLengthByLang = (formLang: string, defaultLang: string) => {
  //   return formLang === defaultLang
  //     ? yup
  //         .string()
  //         .required(
  //           lang === LANGS.EN ? dataAdminPortfolio.en.required : dataAdminPortfolio.vi.required,
  //         )
  //         .min(
  //           40,
  //           lang === LANGS.EN
  //             ? dataAdminPortfolio.en.validate.errLengthTitle
  //             : dataAdminPortfolio.vi.validate.errLengthTitle,
  //         )
  //         .max(
  //           60,
  //           lang === LANGS.EN
  //             ? dataAdminPortfolio.en.validate.errLengthTitle
  //             : dataAdminPortfolio.vi.validate.errLengthTitle,
  //         )
  //     : yup.string();
  // };

  // const validateTextareaLengthByLang = (formLang: string, defaultLang: string) => {
  //   return formLang === defaultLang
  //     ? yup
  //         .string()
  //         .required(
  //           lang === LANGS.EN ? dataAdminPortfolio.en.required : dataAdminPortfolio.vi.required,
  //         )
  //         .max(
  //           150,
  //           lang === LANGS.EN
  //             ? dataAdminPortfolio.en.validate.errLengthDesc(150)
  //             : dataAdminPortfolio.vi.validate.errLengthDesc(150),
  //         )
  //     : yup.string();
  // };

  const validateImage = () => {
    return yup
      .array()
      .min(1, lang === LANGS.EN ? dataAdminPortfolio.en.required : dataAdminPortfolio.vi.required)
      .required(
        lang === LANGS.EN ? dataAdminPortfolio.en.required : dataAdminPortfolio.vi.required,
      );
  };

  return yupResolver<TUpsertPortfolioForm>(
    yup.object().shape({
      //  new portfolio
      nameEn: validateInputByLang(lang, LANGS.EN),
      nameVi: validateInputByLang(lang, LANGS.VI),
      category:
        type === UPSERT_PORTFOLIO_TYPE_FORM.CASE_STUDY
          ? yup
              .string()
              .required(
                lang === LANGS.EN ? dataAdminPortfolio.en.required : dataAdminPortfolio.vi.required,
              )
          : yup.string(),
      thumbnail: validateImage(),
      banner: validateImage(),
      shortDescriptionEn:
        type === UPSERT_PORTFOLIO_TYPE_FORM.CASE_STUDY ||
        type === UPSERT_PORTFOLIO_TYPE_FORM.INNOVATION_HUB
          ? validateInputByLang(lang, LANGS.EN)
          : yup.string(),
      shortDescriptionVi:
        type === UPSERT_PORTFOLIO_TYPE_FORM.CASE_STUDY ||
        type === UPSERT_PORTFOLIO_TYPE_FORM.INNOVATION_HUB
          ? validateInputByLang(lang, LANGS.VI)
          : yup.string(),

      //  introduction
      introductionEn: validateInputByLang(lang, LANGS.EN),
      introductionVi: validateInputByLang(lang, LANGS.VI),
      picture: validateImage(),

      //  main content
      headingMainContentEn:
        type === UPSERT_PORTFOLIO_TYPE_FORM.ESG_REPORT
          ? validateInputByLang(lang, LANGS.EN)
          : yup.string(),
      headingMainContentVi:
        type === UPSERT_PORTFOLIO_TYPE_FORM.ESG_REPORT
          ? validateInputByLang(lang, LANGS.VI)
          : yup.string(),
      descriptionMainContentEn:
        type === UPSERT_PORTFOLIO_TYPE_FORM.ESG_REPORT
          ? validateInputByLang(lang, LANGS.EN)
          : yup.string(),
      descriptionMainContentVi:
        type === UPSERT_PORTFOLIO_TYPE_FORM.ESG_REPORT
          ? validateInputByLang(lang, LANGS.VI)
          : yup.string(),
      titleMainContentEn1:
        type === UPSERT_PORTFOLIO_TYPE_FORM.ESG_REPORT
          ? validateInputByLang(lang, LANGS.EN)
          : yup.string(),
      titleMainContentVi1:
        type === UPSERT_PORTFOLIO_TYPE_FORM.ESG_REPORT
          ? validateInputByLang(lang, LANGS.VI)
          : yup.string(),
      titleMainContentEn2:
        type === UPSERT_PORTFOLIO_TYPE_FORM.ESG_REPORT
          ? validateInputByLang(lang, LANGS.EN)
          : yup.string(),
      titleMainContentVi2:
        type === UPSERT_PORTFOLIO_TYPE_FORM.ESG_REPORT
          ? validateInputByLang(lang, LANGS.VI)
          : yup.string(),
      titleMainContentEn3:
        type === UPSERT_PORTFOLIO_TYPE_FORM.ESG_REPORT
          ? validateInputByLang(lang, LANGS.EN)
          : yup.string(),
      titleMainContentVi3:
        type === UPSERT_PORTFOLIO_TYPE_FORM.ESG_REPORT
          ? validateInputByLang(lang, LANGS.VI)
          : yup.string(),
      coverMainContent1:
        type === UPSERT_PORTFOLIO_TYPE_FORM.ESG_REPORT ? validateImage() : yup.array(),
      coverMainContent2:
        type === UPSERT_PORTFOLIO_TYPE_FORM.ESG_REPORT ? validateImage() : yup.array(),
      coverMainContent3:
        type === UPSERT_PORTFOLIO_TYPE_FORM.ESG_REPORT ? validateImage() : yup.array(),

      //  inside case studies
      headingCaseStudyEn1:
        type === UPSERT_PORTFOLIO_TYPE_FORM.CASE_STUDY ||
        type === UPSERT_PORTFOLIO_TYPE_FORM.INNOVATION_HUB
          ? validateInputByLang(lang, LANGS.EN)
          : yup.string(),
      headingCaseStudyVi1:
        type === UPSERT_PORTFOLIO_TYPE_FORM.CASE_STUDY ||
        type === UPSERT_PORTFOLIO_TYPE_FORM.INNOVATION_HUB
          ? validateInputByLang(lang, LANGS.VI)
          : yup.string(),
      headingCaseStudyEn2:
        type === UPSERT_PORTFOLIO_TYPE_FORM.CASE_STUDY ||
        type === UPSERT_PORTFOLIO_TYPE_FORM.INNOVATION_HUB
          ? validateInputByLang(lang, LANGS.EN)
          : yup.string(),
      headingCaseStudyVi2:
        type === UPSERT_PORTFOLIO_TYPE_FORM.CASE_STUDY ||
        type === UPSERT_PORTFOLIO_TYPE_FORM.INNOVATION_HUB
          ? validateInputByLang(lang, LANGS.VI)
          : yup.string(),
      headingCaseStudyEn3:
        type === UPSERT_PORTFOLIO_TYPE_FORM.CASE_STUDY ||
        type === UPSERT_PORTFOLIO_TYPE_FORM.INNOVATION_HUB
          ? validateInputByLang(lang, LANGS.EN)
          : yup.string(),
      headingCaseStudyVi3:
        type === UPSERT_PORTFOLIO_TYPE_FORM.CASE_STUDY ||
        type === UPSERT_PORTFOLIO_TYPE_FORM.INNOVATION_HUB
          ? validateInputByLang(lang, LANGS.VI)
          : yup.string(),
      coverImage1:
        type === UPSERT_PORTFOLIO_TYPE_FORM.CASE_STUDY ||
        type === UPSERT_PORTFOLIO_TYPE_FORM.INNOVATION_HUB
          ? validateImage()
          : yup.array(),
      coverImage2:
        type === UPSERT_PORTFOLIO_TYPE_FORM.CASE_STUDY ||
        type === UPSERT_PORTFOLIO_TYPE_FORM.INNOVATION_HUB
          ? validateImage()
          : yup.array(),
      coverImage3:
        type === UPSERT_PORTFOLIO_TYPE_FORM.CASE_STUDY ||
        type === UPSERT_PORTFOLIO_TYPE_FORM.INNOVATION_HUB
          ? validateImage()
          : yup.array(),

      //  inside report
      headingReportEn:
        type === UPSERT_PORTFOLIO_TYPE_FORM.ESG_REPORT
          ? validateInputByLang(lang, LANGS.EN)
          : yup.string(),
      headingReportVi:
        type === UPSERT_PORTFOLIO_TYPE_FORM.ESG_REPORT
          ? validateInputByLang(lang, LANGS.VI)
          : yup.string(),
      descriptionReportEn:
        type === UPSERT_PORTFOLIO_TYPE_FORM.ESG_REPORT
          ? validateInputByLang(lang, LANGS.EN)
          : yup.string(),
      descriptionReportVi:
        type === UPSERT_PORTFOLIO_TYPE_FORM.ESG_REPORT
          ? validateInputByLang(lang, LANGS.VI)
          : yup.string(),
      titleTextBoxReportEn1:
        type === UPSERT_PORTFOLIO_TYPE_FORM.ESG_REPORT
          ? validateInputByLang(lang, LANGS.EN)
          : yup.string(),
      titleTextBoxReportVi1:
        type === UPSERT_PORTFOLIO_TYPE_FORM.ESG_REPORT
          ? validateInputByLang(lang, LANGS.VI)
          : yup.string(),
      titleTextBoxReportEn2:
        type === UPSERT_PORTFOLIO_TYPE_FORM.ESG_REPORT
          ? validateInputByLang(lang, LANGS.EN)
          : yup.string(),
      titleTextBoxReportVi2:
        type === UPSERT_PORTFOLIO_TYPE_FORM.ESG_REPORT
          ? validateInputByLang(lang, LANGS.VI)
          : yup.string(),
      titleTextBoxReportEn3:
        type === UPSERT_PORTFOLIO_TYPE_FORM.ESG_REPORT
          ? validateInputByLang(lang, LANGS.EN)
          : yup.string(),
      titleTextBoxReportVi3:
        type === UPSERT_PORTFOLIO_TYPE_FORM.ESG_REPORT
          ? validateInputByLang(lang, LANGS.VI)
          : yup.string(),
      titleTextBoxReportEn4:
        type === UPSERT_PORTFOLIO_TYPE_FORM.ESG_REPORT
          ? validateInputByLang(lang, LANGS.EN)
          : yup.string(),
      titleTextBoxReportVi4:
        type === UPSERT_PORTFOLIO_TYPE_FORM.ESG_REPORT
          ? validateInputByLang(lang, LANGS.VI)
          : yup.string(),
      descriptionTextBoxReportEn1:
        type === UPSERT_PORTFOLIO_TYPE_FORM.ESG_REPORT
          ? validateInputByLang(lang, LANGS.EN)
          : yup.string(),
      descriptionTextBoxReportVi1:
        type === UPSERT_PORTFOLIO_TYPE_FORM.ESG_REPORT
          ? validateInputByLang(lang, LANGS.VI)
          : yup.string(),
      descriptionTextBoxReportEn2:
        type === UPSERT_PORTFOLIO_TYPE_FORM.ESG_REPORT
          ? validateInputByLang(lang, LANGS.EN)
          : yup.string(),
      descriptionTextBoxReportVi2:
        type === UPSERT_PORTFOLIO_TYPE_FORM.ESG_REPORT
          ? validateInputByLang(lang, LANGS.VI)
          : yup.string(),
      descriptionTextBoxReportEn3:
        type === UPSERT_PORTFOLIO_TYPE_FORM.ESG_REPORT
          ? validateInputByLang(lang, LANGS.EN)
          : yup.string(),
      descriptionTextBoxReportVi3:
        type === UPSERT_PORTFOLIO_TYPE_FORM.ESG_REPORT
          ? validateInputByLang(lang, LANGS.VI)
          : yup.string(),
      descriptionTextBoxReportEn4:
        type === UPSERT_PORTFOLIO_TYPE_FORM.ESG_REPORT
          ? validateInputByLang(lang, LANGS.EN)
          : yup.string(),
      descriptionTextBoxReportVi4:
        type === UPSERT_PORTFOLIO_TYPE_FORM.ESG_REPORT
          ? validateInputByLang(lang, LANGS.VI)
          : yup.string(),

      //  highlights
      highlightEn:
        lang === LANGS.EN ? yup.string().required(dataAdminPortfolio.en.required) : yup.string(),
      highlightVi:
        lang === LANGS.VI ? yup.string().required(dataAdminPortfolio.vi.required) : yup.string(),
      pictureHighlight: validateImage(),
      slugEn: yup.string(),
      slugVi: yup.string(),
      tags: yup
        .array()
        .test('validate-tags-en', 'The name cannot contain invalid characters', (tags) => {
          if (!tags) return true;
          return tags.every((tag) => !forbiddenChars.test(tag));
        }),
      status: yup
        .number()
        .required(
          lang === LANGS.EN ? dataAdminPortfolio.en.required : dataAdminPortfolio.vi.required,
        ),
      pdf: yup
        .array()
        .min(
          1,
          lang === LANGS.EN ? dataAdminPortfolio.en.required : dataAdminPortfolio.vi.required,
        ),
      featured: yup.boolean(),
    }),
  );
};

export const getSelectTypePortfolioSchema = (t: TFunction<any, undefined>, lang: string) => {
  return yupResolver<TSelectTypePortfolio>(
    yup.object().shape({
      typeAll:
        lang === LANGS.EN
          ? yup.string().required(dataAdminPortfolio.en.required)
          : yup.string().required(dataAdminPortfolio.vi.required),
    }),
  );
};

export interface TUpsertPortfolioForm {
  nameEn?: string;
  nameVi?: string;
  thumbnail?: string[];
  banner?: string[];
  category?: string;
  shortDescriptionEn?: string;
  shortDescriptionVi?: string;
  introductionEn?: string;
  introductionVi?: string;
  picture?: string[];
  headingCaseStudyEn1?: string;
  headingCaseStudyVi1?: string;
  headingCaseStudyEn2?: string;
  headingCaseStudyVi2?: string;
  headingCaseStudyEn3?: string;
  headingCaseStudyVi3?: string;
  coverImage1?: string[];
  coverImage2?: string[];
  coverImage3?: string[];
  headingReportEn?: string;
  headingReportVi?: string;
  descriptionReportEn?: string;
  descriptionReportVi?: string;
  titleTextBoxReportEn1?: string;
  titleTextBoxReportVi1?: string;
  titleTextBoxReportEn2?: string;
  titleTextBoxReportVi2?: string;
  titleTextBoxReportEn3?: string;
  titleTextBoxReportVi3?: string;
  titleTextBoxReportEn4?: string;
  titleTextBoxReportVi4?: string;
  descriptionTextBoxReportEn1?: string;
  descriptionTextBoxReportVi1?: string;
  descriptionTextBoxReportEn2?: string;
  descriptionTextBoxReportVi2?: string;
  descriptionTextBoxReportEn3?: string;
  descriptionTextBoxReportVi3?: string;
  descriptionTextBoxReportEn4?: string;
  descriptionTextBoxReportVi4?: string;
  headingMainContentEn?: string;
  headingMainContentVi?: string;
  descriptionMainContentEn?: string;
  descriptionMainContentVi?: string;
  titleMainContentEn1?: string;
  titleMainContentVi1?: string;
  titleMainContentEn2?: string;
  titleMainContentVi2?: string;
  titleMainContentEn3?: string;
  titleMainContentVi3?: string;
  coverMainContent1?: string[];
  coverMainContent2?: string[];
  coverMainContent3?: string[];
  highlightEn?: string;
  highlightVi?: string;
  pictureHighlight?: string[];
  pdf?: string[];
  slugEn?: string;
  slugVi?: string;
  tags?: string[];
  status?: number;
  featured?: boolean;
}

export type TSelectTypePortfolio = {
  typeAll?: string;
};
