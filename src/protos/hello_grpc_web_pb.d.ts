import * as grpcWeb from 'grpc-web';

import * as src_protos_hello_pb from '../../src/protos/hello_pb';

export class HelloServiceClient {
  constructor(
    hostname: string,
    credentials?: null | { [index: string]: string },
    options?: null | { [index: string]: any }
  );

  hello(
    request: src_protos_hello_pb.HelloRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (
      err: grpcWeb.Error,
      response: src_protos_hello_pb.HelloResponse
    ) => void
  ): grpcWeb.ClientReadableStream<src_protos_hello_pb.HelloResponse>;
}

export class HelloServicePromiseClient {
  constructor(
    hostname: string,
    credentials?: null | { [index: string]: string },
    options?: null | { [index: string]: any }
  );

  hello(
    request: src_protos_hello_pb.HelloRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_protos_hello_pb.HelloResponse>;
}
