import { GraphQLError } from 'graphql';
import Context from '../../../types/context';
import { status } from '@grpc/grpc-js';

export const authenticateUserErrorHandler = (
    context: Context,
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    error: any
): GraphQLError => {
    const statusCode = error.code;

    if (statusCode) {
        switch (statusCode) {
            case status.INVALID_ARGUMENT:
                return new GraphQLError(
                    'a user with that email does not exist',
                    {
                        extensions: {
                            code: 400,
                        },
                    }
                );
            case status.PERMISSION_DENIED:
                return new GraphQLError('incorrect password', {
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
