import Context from '../../../types/context';
import { Dish } from '../../../types/generated';
import { getDishesForRestaurant as getDishesForRestaurantConnector } from '../../../connectors/surveyorConnector';
import { getDishesForRestaurantErrorHandler } from './getDishesForRestaurantErrorHandler';
import { transformDishesForRestaurantResponse } from '../../../transformers/surveyor/transformers';

export const getDishesForRestaurantModel = async (
    context: Context,
    restaurantId: string
): Promise<Dish[]> => {
    try {
        const dishesForRestaurant = await getDishesForRestaurantConnector(
            context,
            restaurantId
        );
        const transformed =
            transformDishesForRestaurantResponse(dishesForRestaurant);
        return transformed;
    } catch (error) {
        throw getDishesForRestaurantErrorHandler(context, error);
    }
};
