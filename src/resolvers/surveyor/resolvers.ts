import { getDishesForRestaurantModel } from '../../models/surveyor/getDishesForRestaurantModel/getDishesForRestaurantModel';
import { getAllRestaurantsModel } from '../../models/surveyor/getAllRestaurantsModel/getAllRestaurantsModel';
import { addRestaurantModel } from '../../models/surveyor/addRestaurantModel/addRestaurantModel';
import Context from '../../types/context';
import {
    Restaurant,
    Dish,
    AddRestaurantInput,
    AddRestaurantResponse,
} from '../../types/generated';
import { RestaurantIdFromParentResolver } from '../../types/surveyor';

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

export const dishesResolver = async (
    { id: restaurantId }: RestaurantIdFromParentResolver,
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    args: any,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    context: Context,
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    info: any
): Promise<Dish[]> => {
    return getDishesForRestaurantModel(context, restaurantId);
};

export const addRestaurantResolver = async (
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    parent: any,
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    args: { input: AddRestaurantInput },
    context: Context,
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    info: any
): Promise<AddRestaurantResponse> => {
    return addRestaurantModel(context, args.input);
};
