export interface IErrorData {
  code: number,
  message: string,
  timestamp: number
}

export interface ErrorResponse {
  response: {
    data: {
      message: string;
    };
  };
}