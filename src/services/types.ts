/* Auth */
export interface IAuthRegisterRequest {
  email: string;
  username: string;
  password: string;
}

export interface IAuthRegisterResponse {
  message: string;
}

export interface IAuthVerifyRequest {
  activationCode: string;
}

export interface IAuthVerifyResponse{
  jwt: string
}

export interface IAuthLoginRequest {
  email: string;
  password: string;
}

export interface IAuthLoginResponse {
  jwt: string;
}

/* Tweet */
export interface ITweetRequest {
  text: string;
}

export interface ITweetResponse {
  text: string;
}
