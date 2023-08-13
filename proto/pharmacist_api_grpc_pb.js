// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_pharmacist_api_pb = require('../proto/pharmacist_api_pb.js');

function serialize_pb_AuthenticateUserRequest(arg) {
    if (!(arg instanceof proto_pharmacist_api_pb.AuthenticateUserRequest)) {
        throw new Error('Expected argument of type pb.AuthenticateUserRequest');
    }
    return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_AuthenticateUserRequest(buffer_arg) {
    return proto_pharmacist_api_pb.AuthenticateUserRequest.deserializeBinary(
        new Uint8Array(buffer_arg)
    );
}

function serialize_pb_AuthenticateUserResponse(arg) {
    if (!(arg instanceof proto_pharmacist_api_pb.AuthenticateUserResponse)) {
        throw new Error(
            'Expected argument of type pb.AuthenticateUserResponse'
        );
    }
    return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_AuthenticateUserResponse(buffer_arg) {
    return proto_pharmacist_api_pb.AuthenticateUserResponse.deserializeBinary(
        new Uint8Array(buffer_arg)
    );
}

function serialize_pb_CreateUserRequest(arg) {
    if (!(arg instanceof proto_pharmacist_api_pb.CreateUserRequest)) {
        throw new Error('Expected argument of type pb.CreateUserRequest');
    }
    return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_CreateUserRequest(buffer_arg) {
    return proto_pharmacist_api_pb.CreateUserRequest.deserializeBinary(
        new Uint8Array(buffer_arg)
    );
}

function serialize_pb_CreateUserResponse(arg) {
    if (!(arg instanceof proto_pharmacist_api_pb.CreateUserResponse)) {
        throw new Error('Expected argument of type pb.CreateUserResponse');
    }
    return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_CreateUserResponse(buffer_arg) {
    return proto_pharmacist_api_pb.CreateUserResponse.deserializeBinary(
        new Uint8Array(buffer_arg)
    );
}

function serialize_pb_GenerateAccessTokenFromRefreshTokenRequest(arg) {
    if (
        !(
            arg instanceof
            proto_pharmacist_api_pb.GenerateAccessTokenFromRefreshTokenRequest
        )
    ) {
        throw new Error(
            'Expected argument of type pb.GenerateAccessTokenFromRefreshTokenRequest'
        );
    }
    return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GenerateAccessTokenFromRefreshTokenRequest(buffer_arg) {
    return proto_pharmacist_api_pb.GenerateAccessTokenFromRefreshTokenRequest.deserializeBinary(
        new Uint8Array(buffer_arg)
    );
}

function serialize_pb_GenerateAccessTokenFromRefreshTokenResponse(arg) {
    if (
        !(
            arg instanceof
            proto_pharmacist_api_pb.GenerateAccessTokenFromRefreshTokenResponse
        )
    ) {
        throw new Error(
            'Expected argument of type pb.GenerateAccessTokenFromRefreshTokenResponse'
        );
    }
    return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GenerateAccessTokenFromRefreshTokenResponse(
    buffer_arg
) {
    return proto_pharmacist_api_pb.GenerateAccessTokenFromRefreshTokenResponse.deserializeBinary(
        new Uint8Array(buffer_arg)
    );
}

function serialize_pb_GetUserByIdRequest(arg) {
    if (!(arg instanceof proto_pharmacist_api_pb.GetUserByIdRequest)) {
        throw new Error('Expected argument of type pb.GetUserByIdRequest');
    }
    return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GetUserByIdRequest(buffer_arg) {
    return proto_pharmacist_api_pb.GetUserByIdRequest.deserializeBinary(
        new Uint8Array(buffer_arg)
    );
}

function serialize_pb_GetUserByIdResponse(arg) {
    if (!(arg instanceof proto_pharmacist_api_pb.GetUserByIdResponse)) {
        throw new Error('Expected argument of type pb.GetUserByIdResponse');
    }
    return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GetUserByIdResponse(buffer_arg) {
    return proto_pharmacist_api_pb.GetUserByIdResponse.deserializeBinary(
        new Uint8Array(buffer_arg)
    );
}

var AuthService = (exports.AuthService = {
    getUserById: {
        path: '/pb.Auth/GetUserById',
        requestStream: false,
        responseStream: false,
        requestType: proto_pharmacist_api_pb.GetUserByIdRequest,
        responseType: proto_pharmacist_api_pb.GetUserByIdResponse,
        requestSerialize: serialize_pb_GetUserByIdRequest,
        requestDeserialize: deserialize_pb_GetUserByIdRequest,
        responseSerialize: serialize_pb_GetUserByIdResponse,
        responseDeserialize: deserialize_pb_GetUserByIdResponse,
    },
    createUser: {
        path: '/pb.Auth/CreateUser',
        requestStream: false,
        responseStream: false,
        requestType: proto_pharmacist_api_pb.CreateUserRequest,
        responseType: proto_pharmacist_api_pb.CreateUserResponse,
        requestSerialize: serialize_pb_CreateUserRequest,
        requestDeserialize: deserialize_pb_CreateUserRequest,
        responseSerialize: serialize_pb_CreateUserResponse,
        responseDeserialize: deserialize_pb_CreateUserResponse,
    },
    authenticateUser: {
        path: '/pb.Auth/AuthenticateUser',
        requestStream: false,
        responseStream: false,
        requestType: proto_pharmacist_api_pb.AuthenticateUserRequest,
        responseType: proto_pharmacist_api_pb.AuthenticateUserResponse,
        requestSerialize: serialize_pb_AuthenticateUserRequest,
        requestDeserialize: deserialize_pb_AuthenticateUserRequest,
        responseSerialize: serialize_pb_AuthenticateUserResponse,
        responseDeserialize: deserialize_pb_AuthenticateUserResponse,
    },
    generateAccessTokenFromRefreshToken: {
        path: '/pb.Auth/GenerateAccessTokenFromRefreshToken',
        requestStream: false,
        responseStream: false,
        requestType:
            proto_pharmacist_api_pb.GenerateAccessTokenFromRefreshTokenRequest,
        responseType:
            proto_pharmacist_api_pb.GenerateAccessTokenFromRefreshTokenResponse,
        requestSerialize:
            serialize_pb_GenerateAccessTokenFromRefreshTokenRequest,
        requestDeserialize:
            deserialize_pb_GenerateAccessTokenFromRefreshTokenRequest,
        responseSerialize:
            serialize_pb_GenerateAccessTokenFromRefreshTokenResponse,
        responseDeserialize:
            deserialize_pb_GenerateAccessTokenFromRefreshTokenResponse,
    },
});

exports.AuthClient = grpc.makeGenericClientConstructor(AuthService);
