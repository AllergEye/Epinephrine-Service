import Context from '../../../types/context';
import { addDishToRestaurant as addDishToRestaurantConnector } from '../../../connectors/surveyorConnector';
import {
    AddDishToRestaurantInput,
    AddDishToRestaurantResponse,
} from '../../../types/generated';
import { addDishToRestaurantErrorHandler } from './addDishToRestaurantErrorHandler';
import { transformAddDishToRestaurantRequest } from '../../../transformers/surveyor/transformers';

export const addDishToRestaurantModel = async (
    context: Context,
    dish: AddDishToRestaurantInput
): Promise<AddDishToRestaurantResponse> => {
    try {
        const transformedRequest = transformAddDishToRestaurantRequest(dish);
        const response = await addDishToRestaurantConnector(
            context,
            transformedRequest
        );
        return response;
    } catch (error) {
        throw addDishToRestaurantErrorHandler(context, error);
    }
};
