import { HelloRequest, HelloResponse } from '../protos/hello_pb';
import { HelloServiceClient } from '../protos/hello_grpc_web_pb';

const port = 8080;

export const client = new HelloServiceClient(`http://localhost:${port}`);

export const hello = (msg: string): Promise<HelloResponse> => {
  return new Promise<HelloResponse>((resolve, reject) => {
    const request = new HelloRequest();
    request.setMsg(msg);

    client.hello(request, {}, (err, response) => {
      if (err) reject(err);
      else resolve(response);
    });
  });
};
