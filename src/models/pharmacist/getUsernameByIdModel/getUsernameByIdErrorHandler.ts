import { GraphQLError } from 'graphql';
import { status } from '@grpc/grpc-js';
import Context from '../../../types/context';

export const getUsernameByIdErrorHandler = (
    context: Context,
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    error: any
): GraphQLError => {
    const statusCode = error.code;
    if (statusCode) {
        switch (statusCode) {
            case status.NOT_FOUND:
                return new GraphQLError('user not found', {
                    extensions: {
                        code: 404,
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
    return new GraphQLError('error error');
};
