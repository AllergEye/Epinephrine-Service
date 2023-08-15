import { Restaurant, RestaurantLocations } from '../../types/generated';
import {
    GetAllRestaurantsResponseFromSurveyor,
    RestaurantLocationsResponseFromSuveyor,
    RestaurantResponseFromSurveyor,
} from '../../types/surveyor';

export const transformRestaurants = (
    restaurantResponse: GetAllRestaurantsResponseFromSurveyor
): Restaurant[] => {
    const restaurants: Restaurant[] = [];

    restaurantResponse.restaurants.forEach(
        (restaurant: RestaurantResponseFromSurveyor) =>
            restaurants.push({
                id: restaurant.RestaurantId,
                name: restaurant.Name,
                locations: transformLocations(restaurant.Locations),
            })
    );

    return restaurants;
};

export const transformLocations = (
    restaurantLocations: RestaurantLocationsResponseFromSuveyor[]
): RestaurantLocations[] => {
    const locations: RestaurantLocations[] = [];
    restaurantLocations.forEach((location) => {
        locations.push({
            streetAddressLine1: location.StreetAddressLine1,
            streetAddressLine2: location.StreetAddressLine2,
            province: location.Province,
            city: location.City,
            country: location.Country,
            postalCode: location.PostalCode,
        });
    });

    return locations;
};
