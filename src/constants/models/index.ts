export interface DataLogin {
  username: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refToken: string;
  status: string;
}
