export type Error = {
  code: number;
  message: string;
};

export const NotFound: Error = {
  code: 404,
  message: 'The requested resource was not found!'
};

export const InternalServerError: Error = {
  code: 500,
  message: 'The server has encountered a situation it does not know how to handle!'
};

export const NotImplemented: Error = {
  code: 501,
  message: 'The request is not supported by the server and cannot be handled!'
};
