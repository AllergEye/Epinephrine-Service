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
    dishes: DishResponseFromSurveyor[];
}

export interface DishResponseFromSurveyor {
    DishId: string;
    Name: string;
    Allergens: AllergenResponseFromSurveyor[];
}

export interface AllergenResponseFromSurveyor {
    Name: string;
    IsProbabilityKnown: boolean;
    Probability: number;
}

export interface AddRestaurantRequestToSurveyor {
    name: string;
    locations: AddLocationRequestToSurveyor[];
    dishes: AddDishRequestToSurveyor[];
}

export interface AddLocationRequestToSurveyor {
    streetAddressLine1: string;
    streetAddressLine2?: string;
    city: string;
    province: string;
    country: string;
    postalCode: string;
}

export interface AddDishRequestToSurveyor {
    name: string;
    allergens?: AddAllergenRequestToSurveyor[];
}

export interface AddAllergenRequestToSurveyor {
    name: string;
    isProbabilityKnown: boolean;
    probability: number;
}

export interface AddRestaurantResponseFromSurveyor {}

export interface AddDishToRestaurantRequestToSurveyor {
    restaurantId: string;
    dishes: AddDishRequestToSurveyor[];
}

export interface AddDishToRestaurantResponseFromSurveyor {}
