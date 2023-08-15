import Context from '../../../types/context';
import { getAllRestaurants as getAllRestaurantsConnector } from '../../../connectors/surveyorConnector';
import { Restaurant } from '../../../types/generated';
import { getAllRestaurantsErrorHandler } from './getAllRestaurantsErrorHandler';
import { transformRestaurants } from '../../../transformers/surveyor/transformers';

export const getAllRestaurantsModel = async (
    context: Context
): Promise<Restaurant[]> => {
    try {
        const restaurantResponse = await getAllRestaurantsConnector(context);
        const transformed = transformRestaurants(restaurantResponse);
        return transformed;
    } catch (error) {
        throw getAllRestaurantsErrorHandler(context, error);
    }
};
