export interface IResPreFlight {
  code: string;
  data: {
    secret: string;
  };
}

export interface IReqPreFlight {
  data: string;
}

export interface IResLogin {
  access_token: string;
  expires_in: number;
  refresh_expires_in: number;
  refresh_token: string;
  token_type: string;
}

export interface IReqLogin {
  username: string;
  password: string;
}

export interface IAuthenUser {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  full_name: string;
}
