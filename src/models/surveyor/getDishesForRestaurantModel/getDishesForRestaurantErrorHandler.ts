import { GraphQLError } from 'graphql';
import Context from '../../../types/context';
import axios from 'axios';

export const getDishesForRestaurantErrorHandler = (
    context: Context,
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    error: any
): GraphQLError => {
    if (axios.isAxiosError(error)) {
        if (error.code) {
            switch (error.code) {
                case 'NOT_FOUND':
                    return new GraphQLError('restaurant not found', {
                        extensions: {
                            code: 404,
                        },
                    });
                case 'BAD_REQUEST':
                    return new GraphQLError('invalid restaurant id', {
                        extensions: {
                            code: 400,
                        },
                    });
                default:
                    return new GraphQLError('an unknown error occurred');
            }
        }
    }
    return new GraphQLError('error handling error');
};
