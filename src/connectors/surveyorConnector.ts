import axios from 'axios';
import Context from '../types/context';
import { SURVEYOR_SERVICE_URL } from '../lib/config';
import {
    AddRestaurantResponseFromSurveyor,
    GetAllRestaurantsResponseFromSurveyor,
    GetDishesForRestaurantResponseFromSurveyor,
    AddRestaurantRequestToSurveyor,
} from '../types/surveyor';

const client = axios.create({
    baseURL: SURVEYOR_SERVICE_URL,
    timeout: 5000,
});

export const getAllRestaurants = async (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    context: Context
): Promise<GetAllRestaurantsResponseFromSurveyor> => {
    const restaurants = await client.get<GetAllRestaurantsResponseFromSurveyor>(
        '/restaurant'
    );

    return restaurants.data;
};

export const getDishesForRestaurant = async (
    context: Context,
    restaurantId: string
): Promise<GetDishesForRestaurantResponseFromSurveyor> => {
    const dishesForRestaurant =
        await client.get<GetDishesForRestaurantResponseFromSurveyor>(
            `/restaurant/${restaurantId}/dishes`
        );

    return dishesForRestaurant.data;
};

export const addRestaurant = async (
    context: Context,
    restaurant: AddRestaurantRequestToSurveyor
): Promise<AddRestaurantResponseFromSurveyor> => {
    const addRestaurantResponse =
        await client.post<AddRestaurantResponseFromSurveyor>(
            '/restaurant',
            restaurant,
            {
                headers: {
                    Authorization: `Bearer ${context.accessToken}`,
                },
            }
        );

    return addRestaurantResponse.data;
};
