/* Auth */
export interface IAuthRegisterRequest {
  email: string
  username: string
  password: string
}

export interface IAuthRegisterResponse {
  message: string
}

export interface IAuthVerifyRequest {
  activationCode: string
}

export interface IAuthVerifyResponse {
  jwt: string
}

export interface IAuthLoginRequest {
  email: string
  password: string
}

export interface IAuthLoginResponse {
  jwt: string
}

/* Tweet */
export interface IMakeTweetRequest {
  text: string
  file: FileList
}

export interface IMakeTweetResponse {
  text: string
}

export interface IMakeAvatarRequest {
  file: FileList
}

/* Profile */
export interface IChangeInfoRequest {
  username: string
  bio: string
  location: string
  website: string
  birthDate: string
}
