import {
    CreateUserResponse,
    GenerateAccessTokenFromRefreshTokenResponse,
} from '../../../proto/pharmacist_api_pb';
import { TokenPairResponseFromPharmacist } from '../../types/pharmacist';

export const transformTokenPairResponse = (
    createUserResponse:
        | CreateUserResponse
        | GenerateAccessTokenFromRefreshTokenResponse
): TokenPairResponseFromPharmacist => {
    return {
        accessToken: createUserResponse.getAccesstoken(),
        refreshToken: createUserResponse.getRefreshtoken(),
    };
};
