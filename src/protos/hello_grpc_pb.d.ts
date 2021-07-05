// GENERATED CODE -- DO NOT EDIT!

// package: hello
// file: src/protos/hello.proto

import * as src_protos_hello_pb from '../../src/protos/hello_pb';
import * as grpc from '@grpc/grpc-js';

interface IHelloServiceService
  extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  hello: grpc.MethodDefinition<
    src_protos_hello_pb.HelloRequest,
    src_protos_hello_pb.HelloResponse
  >;
}

export const HelloServiceService: IHelloServiceService;

export interface IHelloServiceServer extends grpc.UntypedServiceImplementation {
  hello: grpc.handleUnaryCall<
    src_protos_hello_pb.HelloRequest,
    src_protos_hello_pb.HelloResponse
  >;
}

export class HelloServiceClient extends grpc.Client {
  constructor(
    address: string,
    credentials: grpc.ChannelCredentials,
    options?: object
  );
  hello(
    argument: src_protos_hello_pb.HelloRequest,
    callback: grpc.requestCallback<src_protos_hello_pb.HelloResponse>
  ): grpc.ClientUnaryCall;
  hello(
    argument: src_protos_hello_pb.HelloRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<src_protos_hello_pb.HelloResponse>
  ): grpc.ClientUnaryCall;
  hello(
    argument: src_protos_hello_pb.HelloRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<src_protos_hello_pb.HelloResponse>
  ): grpc.ClientUnaryCall;
}
