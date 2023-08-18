import { GraphQLError } from 'graphql';
import Context from '../../../types/context';
import axios from 'axios';

export const addDishToRestaurantErrorHandler = (
    context: Context,
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    error: any
): GraphQLError => {
    if (axios.isAxiosError(error)) {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    return new GraphQLError('auth error: invalid token', {
                        extensions: {
                            code: 401,
                        },
                    });
                case 412:
                    return new GraphQLError(error.response.statusText, {
                        extensions: {
                            code: 412,
                        },
                    });
                default:
                    return new GraphQLError('an unknown error occurred');
            }
        }
    }

    return new GraphQLError('error handling error');
};
