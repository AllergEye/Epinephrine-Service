import { GraphQLError } from 'graphql';
import Context from '../../../types/context';
import axios from 'axios';

export const getAllRestaurantsErrorHandler = (
    context: Context,
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    error: any
): GraphQLError => {
    if (axios.isAxiosError(error)) {
        if (error.code) {
            switch (error.code) {
                default:
                    return new GraphQLError('an unknown error occurred');
            }
        }
    }

    return new GraphQLError('error handling error');
};
