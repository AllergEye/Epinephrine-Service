import Context from '../../../types/context';
import { addRestaurant as addRestaurantConnector } from '../../../connectors/surveyorConnector';
import {
    AddRestaurantInput,
    AddRestaurantResponse,
} from '../../../types/generated';
import { transformAddRestaurantRequest } from '../../../transformers/surveyor/transformers';
import { addRestaurantErrorHandler } from './addRestaurantErrorHandler';

export const addRestaurantModel = async (
    context: Context,
    restaurant: AddRestaurantInput
): Promise<AddRestaurantResponse> => {
    try {
        const transformedRequest = transformAddRestaurantRequest(restaurant);
        const response = await addRestaurantConnector(
            context,
            transformedRequest
        );
        return response;
    } catch (error) {
        throw addRestaurantErrorHandler(context, error);
    }
};
