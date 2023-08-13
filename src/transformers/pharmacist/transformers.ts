import { CreateUserResponse } from '../../../proto/pharmacist_api_pb';
import { TokenPairResponseFromPharmacist } from '../../types/pharmacist';

export const transformTokenPairResponse = (
    createUserResponse: CreateUserResponse
): TokenPairResponseFromPharmacist => {
    return {
        accessToken: createUserResponse.getAccesstoken(),
        refreshToken: createUserResponse.getRefreshtoken(),
    };
};
