import Context from '../../../types/context';
import { authenticateUserErrorHandler } from './authenticateUserErrorHandler';
import { authenticateUser as authenticateUserConnector } from '../../../connectors/pharmacistConnector';
import { transformTokenPairResponse } from '../../../transformers/pharmacist/transformers';
import { TokenPairResponseFromPharmacist } from '../../../types/pharmacist';

export const authenticateUserModel = async (
    context: Context,
    email: string,
    password: string
): Promise<TokenPairResponseFromPharmacist> => {
    try {
        const tokenPairResponse = await authenticateUserConnector(
            context,
            email,
            password
        );
        const transformed = transformTokenPairResponse(tokenPairResponse);
        return transformed;
    } catch (error) {
        throw authenticateUserErrorHandler(context, error);
    }
};
