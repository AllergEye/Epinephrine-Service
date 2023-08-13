import { GraphQLError } from 'graphql';
import Context from '../../../types/context';
import { status } from '@grpc/grpc-js';

export const createUserErrorHandler = (
    context: Context,
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    error: any
): GraphQLError => {
    const statusCode = error.code;

    if (statusCode) {
        switch (statusCode) {
            case status.FAILED_PRECONDITION:
                return new GraphQLError(
                    'a user with that email already exists',
                    {
                        extensions: {
                            code: 412,
                        },
                    }
                );
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
