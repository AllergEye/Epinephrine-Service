// package: pb
// file: proto/pharmacist_api.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from 'google-protobuf';

export class GetUserByIdRequest extends jspb.Message {
    getUserid(): string;
    setUserid(value: string): GetUserByIdRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserByIdRequest.AsObject;
    static toObject(
        includeInstance: boolean,
        msg: GetUserByIdRequest
    ): GetUserByIdRequest.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: {
        [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
    };
    static serializeBinaryToWriter(
        message: GetUserByIdRequest,
        writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): GetUserByIdRequest;
    static deserializeBinaryFromReader(
        message: GetUserByIdRequest,
        reader: jspb.BinaryReader
    ): GetUserByIdRequest;
}

export namespace GetUserByIdRequest {
    export type AsObject = {
        userid: string;
    };
}

export class GetUserByIdResponse extends jspb.Message {
    getUsername(): string;
    setUsername(value: string): GetUserByIdResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserByIdResponse.AsObject;
    static toObject(
        includeInstance: boolean,
        msg: GetUserByIdResponse
    ): GetUserByIdResponse.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: {
        [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
    };
    static serializeBinaryToWriter(
        message: GetUserByIdResponse,
        writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): GetUserByIdResponse;
    static deserializeBinaryFromReader(
        message: GetUserByIdResponse,
        reader: jspb.BinaryReader
    ): GetUserByIdResponse;
}

export namespace GetUserByIdResponse {
    export type AsObject = {
        username: string;
    };
}

export class CreateUserRequest extends jspb.Message {
    getEmail(): string;
    setEmail(value: string): CreateUserRequest;
    getFirstname(): string;
    setFirstname(value: string): CreateUserRequest;
    getLastname(): string;
    setLastname(value: string): CreateUserRequest;
    getPassword(): string;
    setPassword(value: string): CreateUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateUserRequest.AsObject;
    static toObject(
        includeInstance: boolean,
        msg: CreateUserRequest
    ): CreateUserRequest.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: {
        [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
    };
    static serializeBinaryToWriter(
        message: CreateUserRequest,
        writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): CreateUserRequest;
    static deserializeBinaryFromReader(
        message: CreateUserRequest,
        reader: jspb.BinaryReader
    ): CreateUserRequest;
}

export namespace CreateUserRequest {
    export type AsObject = {
        email: string;
        firstname: string;
        lastname: string;
        password: string;
    };
}

export class CreateUserResponse extends jspb.Message {
    getAccesstoken(): string;
    setAccesstoken(value: string): CreateUserResponse;
    getRefreshtoken(): string;
    setRefreshtoken(value: string): CreateUserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateUserResponse.AsObject;
    static toObject(
        includeInstance: boolean,
        msg: CreateUserResponse
    ): CreateUserResponse.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: {
        [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
    };
    static serializeBinaryToWriter(
        message: CreateUserResponse,
        writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): CreateUserResponse;
    static deserializeBinaryFromReader(
        message: CreateUserResponse,
        reader: jspb.BinaryReader
    ): CreateUserResponse;
}

export namespace CreateUserResponse {
    export type AsObject = {
        accesstoken: string;
        refreshtoken: string;
    };
}

export class AuthenticateUserRequest extends jspb.Message {
    getEmail(): string;
    setEmail(value: string): AuthenticateUserRequest;
    getPassword(): string;
    setPassword(value: string): AuthenticateUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthenticateUserRequest.AsObject;
    static toObject(
        includeInstance: boolean,
        msg: AuthenticateUserRequest
    ): AuthenticateUserRequest.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: {
        [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
    };
    static serializeBinaryToWriter(
        message: AuthenticateUserRequest,
        writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): AuthenticateUserRequest;
    static deserializeBinaryFromReader(
        message: AuthenticateUserRequest,
        reader: jspb.BinaryReader
    ): AuthenticateUserRequest;
}

export namespace AuthenticateUserRequest {
    export type AsObject = {
        email: string;
        password: string;
    };
}

export class AuthenticateUserResponse extends jspb.Message {
    getAccesstoken(): string;
    setAccesstoken(value: string): AuthenticateUserResponse;
    getRefreshtoken(): string;
    setRefreshtoken(value: string): AuthenticateUserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthenticateUserResponse.AsObject;
    static toObject(
        includeInstance: boolean,
        msg: AuthenticateUserResponse
    ): AuthenticateUserResponse.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: {
        [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
    };
    static serializeBinaryToWriter(
        message: AuthenticateUserResponse,
        writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): AuthenticateUserResponse;
    static deserializeBinaryFromReader(
        message: AuthenticateUserResponse,
        reader: jspb.BinaryReader
    ): AuthenticateUserResponse;
}

export namespace AuthenticateUserResponse {
    export type AsObject = {
        accesstoken: string;
        refreshtoken: string;
    };
}

export class GenerateAccessTokenFromRefreshTokenRequest extends jspb.Message {
    getRefreshtoken(): string;
    setRefreshtoken(value: string): GenerateAccessTokenFromRefreshTokenRequest;

    serializeBinary(): Uint8Array;
    toObject(
        includeInstance?: boolean
    ): GenerateAccessTokenFromRefreshTokenRequest.AsObject;
    static toObject(
        includeInstance: boolean,
        msg: GenerateAccessTokenFromRefreshTokenRequest
    ): GenerateAccessTokenFromRefreshTokenRequest.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: {
        [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
    };
    static serializeBinaryToWriter(
        message: GenerateAccessTokenFromRefreshTokenRequest,
        writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(
        bytes: Uint8Array
    ): GenerateAccessTokenFromRefreshTokenRequest;
    static deserializeBinaryFromReader(
        message: GenerateAccessTokenFromRefreshTokenRequest,
        reader: jspb.BinaryReader
    ): GenerateAccessTokenFromRefreshTokenRequest;
}

export namespace GenerateAccessTokenFromRefreshTokenRequest {
    export type AsObject = {
        refreshtoken: string;
    };
}

export class GenerateAccessTokenFromRefreshTokenResponse extends jspb.Message {
    getAccesstoken(): string;
    setAccesstoken(value: string): GenerateAccessTokenFromRefreshTokenResponse;
    getRefreshtoken(): string;
    setRefreshtoken(value: string): GenerateAccessTokenFromRefreshTokenResponse;

    serializeBinary(): Uint8Array;
    toObject(
        includeInstance?: boolean
    ): GenerateAccessTokenFromRefreshTokenResponse.AsObject;
    static toObject(
        includeInstance: boolean,
        msg: GenerateAccessTokenFromRefreshTokenResponse
    ): GenerateAccessTokenFromRefreshTokenResponse.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: {
        [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
    };
    static serializeBinaryToWriter(
        message: GenerateAccessTokenFromRefreshTokenResponse,
        writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(
        bytes: Uint8Array
    ): GenerateAccessTokenFromRefreshTokenResponse;
    static deserializeBinaryFromReader(
        message: GenerateAccessTokenFromRefreshTokenResponse,
        reader: jspb.BinaryReader
    ): GenerateAccessTokenFromRefreshTokenResponse;
}

export namespace GenerateAccessTokenFromRefreshTokenResponse {
    export type AsObject = {
        accesstoken: string;
        refreshtoken: string;
    };
}
