export interface GetAllRestaurantsResponseFromSurveyor {
    restaurants: [RestaurantResponseFromSurveyor];
}

export interface RestaurantResponseFromSurveyor {
    RestaurantId: string;
    Name: string;
    Locations: [RestaurantLocationsResponseFromSuveyor];
}

export interface RestaurantLocationsResponseFromSuveyor {
    StreetAddressLine1: string;
    StreetAddressLine2?: string;
    City: string;
    Province: string;
    Country: string;
    PostalCode: string;
}

export interface RestaurantIdFromParentResolver {
    id: string;
}

export interface GetDishesForRestaurantResponseFromSurveyor {
    dishes: [DishesResponseFromSurveyor];
}

export interface DishesResponseFromSurveyor {
    DishId: string;
    Name: string;
    Allergens: [AllergensResponseFromSurveyor];
}

export interface AllergensResponseFromSurveyor {
    Name: string;
    IsProbabilityKnown: boolean;
    Probability: number;
}
