import { GraphQLError } from 'graphql';
import Context from '../../../types/context';

export const getAllRestaurantsErrorHandler = (
    context: Context,
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    error: any
): GraphQLError => {
    console.log(error);
    return new GraphQLError(
        'idk what an error could look like so logging it first'
    );
};
