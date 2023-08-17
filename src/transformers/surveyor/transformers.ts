import {
    Dish,
    DishAllergen,
    Restaurant,
    Location,
    RestaurantLocationInput,
    RestaurantDishInput,
    DishAllergenInput,
    AddRestaurantInput,
} from '../../types/generated';
import {
    AllergenResponseFromSurveyor,
    GetAllRestaurantsResponseFromSurveyor,
    GetDishesForRestaurantResponseFromSurveyor,
    AddLocationRequestToSurveyor,
    RestaurantLocationsResponseFromSuveyor,
    AddRestaurantRequestToSurveyor,
    RestaurantResponseFromSurveyor,
    AddDishRequestToSurveyor,
    AddAllergenRequestToSurveyor,
} from '../../types/surveyor';

export const transformRestaurantResponse = (
    restaurantResponse: GetAllRestaurantsResponseFromSurveyor
): Restaurant[] => {
    const restaurants: Restaurant[] = [];

    restaurantResponse.restaurants.forEach(
        (restaurant: RestaurantResponseFromSurveyor) =>
            restaurants.push({
                id: restaurant.RestaurantId,
                name: restaurant.Name,
                locations: transformLocationResponse(restaurant.Locations),
            })
    );

    return restaurants;
};

export const transformLocationResponse = (
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

export const transformDishesForRestaurantResponse = (
    dishesForRestaurant: GetDishesForRestaurantResponseFromSurveyor
): Dish[] => {
    const dishes: Dish[] = [];
    dishesForRestaurant.dishes.forEach((dish) => {
        dishes.push({
            name: dish.Name,
            allergens: transformAllergenResponse(dish.Allergens),
        });
    });

    return dishes;
};

export const transformAllergenResponse = (
    allergensForDish: AllergenResponseFromSurveyor[]
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

export const transformAddRestaurantRequest = (
    restaurant: AddRestaurantInput
): AddRestaurantRequestToSurveyor => {
    const restaurantRequest: AddRestaurantRequestToSurveyor = {
        name: restaurant.name,
        locations: transformAddLocationRequest(restaurant.locations),
        dishes: transformAddDishRequest(restaurant.dishes),
    };

    return restaurantRequest;
};

export const transformAddLocationRequest = (
    locations: RestaurantLocationInput[]
): AddLocationRequestToSurveyor[] => {
    const locationsToAdd: AddLocationRequestToSurveyor[] = [];

    locations.forEach((location) => {
        locationsToAdd.push({
            ...location,
            streetAddressLine2: String(location?.streetAddressLine2),
        });
    });

    return locationsToAdd;
};

export const transformAddDishRequest = (
    dishes: RestaurantDishInput[]
): AddDishRequestToSurveyor[] => {
    const dishesToAdd: AddDishRequestToSurveyor[] = [];
    dishes.forEach((dish) => {
        if (dish.allergens) {
            dishesToAdd.push({
                ...dish,
                allergens: transformAddAllergenRequest(
                    dish.allergens as DishAllergenInput[]
                ),
            });
        } else {
            dishesToAdd.push({
                ...dish,
                allergens: undefined,
            });
        }
    });

    return dishesToAdd;
};

export const transformAddAllergenRequest = (
    allergens: DishAllergenInput[]
): AddAllergenRequestToSurveyor[] => {
    const allergensToAdd: AddAllergenRequestToSurveyor[] = [];
    allergens.forEach((allergen) => {
        allergensToAdd.push({
            ...allergen,
        });
    });

    return allergensToAdd;
};
