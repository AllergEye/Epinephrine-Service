// package: pb
// file: proto/pharmacist_api.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from 'grpc';
import * as proto_pharmacist_api_pb from '../proto/pharmacist_api_pb';

interface IAuthService
    extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getUserById: IAuthService_IGetUserById;
    createUser: IAuthService_ICreateUser;
    authenticateUser: IAuthService_IAuthenticateUser;
    generateAccessTokenFromRefreshToken: IAuthService_IGenerateAccessTokenFromRefreshToken;
}

interface IAuthService_IGetUserById
    extends grpc.MethodDefinition<
        proto_pharmacist_api_pb.GetUserByIdRequest,
        proto_pharmacist_api_pb.GetUserByIdResponse
    > {
    path: '/pb.Auth/GetUserById';
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_pharmacist_api_pb.GetUserByIdRequest>;
    requestDeserialize: grpc.deserialize<proto_pharmacist_api_pb.GetUserByIdRequest>;
    responseSerialize: grpc.serialize<proto_pharmacist_api_pb.GetUserByIdResponse>;
    responseDeserialize: grpc.deserialize<proto_pharmacist_api_pb.GetUserByIdResponse>;
}
interface IAuthService_ICreateUser
    extends grpc.MethodDefinition<
        proto_pharmacist_api_pb.CreateUserRequest,
        proto_pharmacist_api_pb.CreateUserResponse
    > {
    path: '/pb.Auth/CreateUser';
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_pharmacist_api_pb.CreateUserRequest>;
    requestDeserialize: grpc.deserialize<proto_pharmacist_api_pb.CreateUserRequest>;
    responseSerialize: grpc.serialize<proto_pharmacist_api_pb.CreateUserResponse>;
    responseDeserialize: grpc.deserialize<proto_pharmacist_api_pb.CreateUserResponse>;
}
interface IAuthService_IAuthenticateUser
    extends grpc.MethodDefinition<
        proto_pharmacist_api_pb.AuthenticateUserRequest,
        proto_pharmacist_api_pb.AuthenticateUserResponse
    > {
    path: '/pb.Auth/AuthenticateUser';
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_pharmacist_api_pb.AuthenticateUserRequest>;
    requestDeserialize: grpc.deserialize<proto_pharmacist_api_pb.AuthenticateUserRequest>;
    responseSerialize: grpc.serialize<proto_pharmacist_api_pb.AuthenticateUserResponse>;
    responseDeserialize: grpc.deserialize<proto_pharmacist_api_pb.AuthenticateUserResponse>;
}
interface IAuthService_IGenerateAccessTokenFromRefreshToken
    extends grpc.MethodDefinition<
        proto_pharmacist_api_pb.GenerateAccessTokenFromRefreshTokenRequest,
        proto_pharmacist_api_pb.GenerateAccessTokenFromRefreshTokenResponse
    > {
    path: '/pb.Auth/GenerateAccessTokenFromRefreshToken';
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_pharmacist_api_pb.GenerateAccessTokenFromRefreshTokenRequest>;
    requestDeserialize: grpc.deserialize<proto_pharmacist_api_pb.GenerateAccessTokenFromRefreshTokenRequest>;
    responseSerialize: grpc.serialize<proto_pharmacist_api_pb.GenerateAccessTokenFromRefreshTokenResponse>;
    responseDeserialize: grpc.deserialize<proto_pharmacist_api_pb.GenerateAccessTokenFromRefreshTokenResponse>;
}

export const AuthService: IAuthService;

export interface IAuthServer {
    getUserById: grpc.handleUnaryCall<
        proto_pharmacist_api_pb.GetUserByIdRequest,
        proto_pharmacist_api_pb.GetUserByIdResponse
    >;
    createUser: grpc.handleUnaryCall<
        proto_pharmacist_api_pb.CreateUserRequest,
        proto_pharmacist_api_pb.CreateUserResponse
    >;
    authenticateUser: grpc.handleUnaryCall<
        proto_pharmacist_api_pb.AuthenticateUserRequest,
        proto_pharmacist_api_pb.AuthenticateUserResponse
    >;
    generateAccessTokenFromRefreshToken: grpc.handleUnaryCall<
        proto_pharmacist_api_pb.GenerateAccessTokenFromRefreshTokenRequest,
        proto_pharmacist_api_pb.GenerateAccessTokenFromRefreshTokenResponse
    >;
}

export interface IAuthClient {
    getUserById(
        request: proto_pharmacist_api_pb.GetUserByIdRequest,
        callback: (
            error: grpc.ServiceError | null,
            response: proto_pharmacist_api_pb.GetUserByIdResponse
        ) => void
    ): grpc.ClientUnaryCall;
    getUserById(
        request: proto_pharmacist_api_pb.GetUserByIdRequest,
        metadata: grpc.Metadata,
        callback: (
            error: grpc.ServiceError | null,
            response: proto_pharmacist_api_pb.GetUserByIdResponse
        ) => void
    ): grpc.ClientUnaryCall;
    getUserById(
        request: proto_pharmacist_api_pb.GetUserByIdRequest,
        metadata: grpc.Metadata,
        options: Partial<grpc.CallOptions>,
        callback: (
            error: grpc.ServiceError | null,
            response: proto_pharmacist_api_pb.GetUserByIdResponse
        ) => void
    ): grpc.ClientUnaryCall;
    createUser(
        request: proto_pharmacist_api_pb.CreateUserRequest,
        callback: (
            error: grpc.ServiceError | null,
            response: proto_pharmacist_api_pb.CreateUserResponse
        ) => void
    ): grpc.ClientUnaryCall;
    createUser(
        request: proto_pharmacist_api_pb.CreateUserRequest,
        metadata: grpc.Metadata,
        callback: (
            error: grpc.ServiceError | null,
            response: proto_pharmacist_api_pb.CreateUserResponse
        ) => void
    ): grpc.ClientUnaryCall;
    createUser(
        request: proto_pharmacist_api_pb.CreateUserRequest,
        metadata: grpc.Metadata,
        options: Partial<grpc.CallOptions>,
        callback: (
            error: grpc.ServiceError | null,
            response: proto_pharmacist_api_pb.CreateUserResponse
        ) => void
    ): grpc.ClientUnaryCall;
    authenticateUser(
        request: proto_pharmacist_api_pb.AuthenticateUserRequest,
        callback: (
            error: grpc.ServiceError | null,
            response: proto_pharmacist_api_pb.AuthenticateUserResponse
        ) => void
    ): grpc.ClientUnaryCall;
    authenticateUser(
        request: proto_pharmacist_api_pb.AuthenticateUserRequest,
        metadata: grpc.Metadata,
        callback: (
            error: grpc.ServiceError | null,
            response: proto_pharmacist_api_pb.AuthenticateUserResponse
        ) => void
    ): grpc.ClientUnaryCall;
    authenticateUser(
        request: proto_pharmacist_api_pb.AuthenticateUserRequest,
        metadata: grpc.Metadata,
        options: Partial<grpc.CallOptions>,
        callback: (
            error: grpc.ServiceError | null,
            response: proto_pharmacist_api_pb.AuthenticateUserResponse
        ) => void
    ): grpc.ClientUnaryCall;
    generateAccessTokenFromRefreshToken(
        request: proto_pharmacist_api_pb.GenerateAccessTokenFromRefreshTokenRequest,
        callback: (
            error: grpc.ServiceError | null,
            response: proto_pharmacist_api_pb.GenerateAccessTokenFromRefreshTokenResponse
        ) => void
    ): grpc.ClientUnaryCall;
    generateAccessTokenFromRefreshToken(
        request: proto_pharmacist_api_pb.GenerateAccessTokenFromRefreshTokenRequest,
        metadata: grpc.Metadata,
        callback: (
            error: grpc.ServiceError | null,
            response: proto_pharmacist_api_pb.GenerateAccessTokenFromRefreshTokenResponse
        ) => void
    ): grpc.ClientUnaryCall;
    generateAccessTokenFromRefreshToken(
        request: proto_pharmacist_api_pb.GenerateAccessTokenFromRefreshTokenRequest,
        metadata: grpc.Metadata,
        options: Partial<grpc.CallOptions>,
        callback: (
            error: grpc.ServiceError | null,
            response: proto_pharmacist_api_pb.GenerateAccessTokenFromRefreshTokenResponse
        ) => void
    ): grpc.ClientUnaryCall;
}

export class AuthClient extends grpc.Client implements IAuthClient {
    constructor(
        address: string,
        credentials: grpc.ChannelCredentials,
        options?: object
    );
    public getUserById(
        request: proto_pharmacist_api_pb.GetUserByIdRequest,
        callback: (
            error: grpc.ServiceError | null,
            response: proto_pharmacist_api_pb.GetUserByIdResponse
        ) => void
    ): grpc.ClientUnaryCall;
    public getUserById(
        request: proto_pharmacist_api_pb.GetUserByIdRequest,
        metadata: grpc.Metadata,
        callback: (
            error: grpc.ServiceError | null,
            response: proto_pharmacist_api_pb.GetUserByIdResponse
        ) => void
    ): grpc.ClientUnaryCall;
    public getUserById(
        request: proto_pharmacist_api_pb.GetUserByIdRequest,
        metadata: grpc.Metadata,
        options: Partial<grpc.CallOptions>,
        callback: (
            error: grpc.ServiceError | null,
            response: proto_pharmacist_api_pb.GetUserByIdResponse
        ) => void
    ): grpc.ClientUnaryCall;
    public createUser(
        request: proto_pharmacist_api_pb.CreateUserRequest,
        callback: (
            error: grpc.ServiceError | null,
            response: proto_pharmacist_api_pb.CreateUserResponse
        ) => void
    ): grpc.ClientUnaryCall;
    public createUser(
        request: proto_pharmacist_api_pb.CreateUserRequest,
        metadata: grpc.Metadata,
        callback: (
            error: grpc.ServiceError | null,
            response: proto_pharmacist_api_pb.CreateUserResponse
        ) => void
    ): grpc.ClientUnaryCall;
    public createUser(
        request: proto_pharmacist_api_pb.CreateUserRequest,
        metadata: grpc.Metadata,
        options: Partial<grpc.CallOptions>,
        callback: (
            error: grpc.ServiceError | null,
            response: proto_pharmacist_api_pb.CreateUserResponse
        ) => void
    ): grpc.ClientUnaryCall;
    public authenticateUser(
        request: proto_pharmacist_api_pb.AuthenticateUserRequest,
        callback: (
            error: grpc.ServiceError | null,
            response: proto_pharmacist_api_pb.AuthenticateUserResponse
        ) => void
    ): grpc.ClientUnaryCall;
    public authenticateUser(
        request: proto_pharmacist_api_pb.AuthenticateUserRequest,
        metadata: grpc.Metadata,
        callback: (
            error: grpc.ServiceError | null,
            response: proto_pharmacist_api_pb.AuthenticateUserResponse
        ) => void
    ): grpc.ClientUnaryCall;
    public authenticateUser(
        request: proto_pharmacist_api_pb.AuthenticateUserRequest,
        metadata: grpc.Metadata,
        options: Partial<grpc.CallOptions>,
        callback: (
            error: grpc.ServiceError | null,
            response: proto_pharmacist_api_pb.AuthenticateUserResponse
        ) => void
    ): grpc.ClientUnaryCall;
    public generateAccessTokenFromRefreshToken(
        request: proto_pharmacist_api_pb.GenerateAccessTokenFromRefreshTokenRequest,
        callback: (
            error: grpc.ServiceError | null,
            response: proto_pharmacist_api_pb.GenerateAccessTokenFromRefreshTokenResponse
        ) => void
    ): grpc.ClientUnaryCall;
    public generateAccessTokenFromRefreshToken(
        request: proto_pharmacist_api_pb.GenerateAccessTokenFromRefreshTokenRequest,
        metadata: grpc.Metadata,
        callback: (
            error: grpc.ServiceError | null,
            response: proto_pharmacist_api_pb.GenerateAccessTokenFromRefreshTokenResponse
        ) => void
    ): grpc.ClientUnaryCall;
    public generateAccessTokenFromRefreshToken(
        request: proto_pharmacist_api_pb.GenerateAccessTokenFromRefreshTokenRequest,
        metadata: grpc.Metadata,
        options: Partial<grpc.CallOptions>,
        callback: (
            error: grpc.ServiceError | null,
            response: proto_pharmacist_api_pb.GenerateAccessTokenFromRefreshTokenResponse
        ) => void
    ): grpc.ClientUnaryCall;
}
