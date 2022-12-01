import { Request, Response } from 'express';

export interface BaseResponse<T> {
  result: boolean;
  message: string;
  data?: T;
}

export interface SVRequest<RequestModel extends {}> extends Request<any, any, RequestModel> {}
export interface SVResponse<ResponseModel extends {}> extends Response<BaseResponse<ResponseModel>> {}
