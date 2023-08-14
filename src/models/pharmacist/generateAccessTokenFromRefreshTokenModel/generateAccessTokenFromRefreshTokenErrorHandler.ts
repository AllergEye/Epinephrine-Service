import { GraphQLError } from 'graphql';
import Context from '../../../types/context';
import { status } from '@grpc/grpc-js';

export const generateAccessTokenFromRefreshTokenErrorHandler = (
    context: Context,
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    error: any
): GraphQLError => {
    const statusCode = error.code;

    if (statusCode) {
        switch (statusCode) {
            case status.PERMISSION_DENIED:
                return new GraphQLError('invalid token', {
                    extensions: {
                        code: 403,
                    },
                });
            default:
                return new GraphQLError('an unknown error occurred', {
                    extensions: {
                        code: 500,
                    },
                });
        }
    }

    return new GraphQLError('error handling error');
};
