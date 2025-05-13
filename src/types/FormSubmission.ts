export interface IForm {
  created_at: number;
  id: string;
  is_notify: boolean;
  name: string;
  status: number;
  type: number;
}

export interface FormsSubmissionsData {
  key: string;
  name: string;
  date: number;
  status: string | number;
  slug: string;
  formData: IForm;
}

export interface IResLatestActivity {
  company: string;
  category: number;
  created_at: number;
  email: string;
  id: string;
  inquiry: number;
  label: number;
  message: string;
  name: string;
  phone: string;
  receive_email: boolean;
  role: string;
  title: number;
  viewed: boolean;
  form: IForm;
}
export interface LastedActivityData {
  key: string;
  email: string;
  label: number;
  message: string;
  name: string;
  phone: string;
  form: string;
  isShowTitle: boolean;
  isShowInquiry: boolean;
}
