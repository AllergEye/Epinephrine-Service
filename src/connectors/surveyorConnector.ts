import axios from 'axios';
import Context from '../types/context';
import { SURVEYOR_SERVICE_URL } from '../lib/config';
import {
    GetAllRestaurantsResponseFromSurveyor,
    GetDishesForRestaurantResponseFromSurveyor,
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
            `/dish/${restaurantId}`
        );

    return dishesForRestaurant.data;
};
