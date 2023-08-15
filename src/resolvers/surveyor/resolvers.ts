import { getAllRestaurantsModel } from '../../models/surveyor/getAllRestaurantsModel/getAllRestaurantsModel';
import Context from '../../types/context';
import { Restaurant } from '../../types/generated';

export const restaurantsResolver = async (
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    parent: any,
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    args: any,
    context: Context,
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    info: any
): Promise<Restaurant[]> => {
    return getAllRestaurantsModel(context);
};
