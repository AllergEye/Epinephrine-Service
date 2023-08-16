import {
    Dish,
    DishAllergen,
    Restaurant,
    Location,
} from '../../types/generated';
import {
    AllergensResponseFromSurveyor,
    GetAllRestaurantsResponseFromSurveyor,
    GetDishesForRestaurantResponseFromSurveyor,
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
): Location[] => {
    const locations: Location[] = [];
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

export const transformDishesForRestaurant = (
    dishesForRestaurant: GetDishesForRestaurantResponseFromSurveyor
): Dish[] => {
    const dishes: Dish[] = [];
    dishesForRestaurant.dishes.forEach((dish) => {
        dishes.push({
            name: dish.Name,
            allergens: transformAllergens(dish.Allergens),
        });
    });

    return dishes;
};

export const transformAllergens = (
    allergensForDish: AllergensResponseFromSurveyor[]
): DishAllergen[] => {
    const allergens: DishAllergen[] = [];
    allergensForDish.forEach((allergen) => {
        allergens.push({
            name: allergen.Name,
            isProbabilityKnown: allergen.IsProbabilityKnown,
            probability: allergen.Probability,
        });
    });

    return allergens;
};
