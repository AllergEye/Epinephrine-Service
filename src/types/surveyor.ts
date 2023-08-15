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
