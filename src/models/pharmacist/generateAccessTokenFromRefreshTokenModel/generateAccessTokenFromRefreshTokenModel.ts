import Context from '../../../types/context';
import { generateAccessTokenFromRefreshToken as generateAccessTokenFromRefreshTokenConnector } from '../../../connectors/pharmacistConnector';
import { TokenPairResponseFromPharmacist } from '../../../types/pharmacist';
import { transformTokenPairResponse } from '../../../transformers/pharmacist/transformers';
import { generateAccessTokenFromRefreshTokenErrorHandler } from './generateAccessTokenFromRefreshTokenErrorHandler';

export const generateAccessTokenFromRefreshTokenModel = async (
    context: Context,
    refreshToken: string
): Promise<TokenPairResponseFromPharmacist> => {
    try {
        const tokenPairResponse =
            await generateAccessTokenFromRefreshTokenConnector(
                context,
                refreshToken
            );
        const transformed = transformTokenPairResponse(tokenPairResponse);
        return transformed;
    } catch (error) {
        throw generateAccessTokenFromRefreshTokenErrorHandler(context, error);
    }
};
