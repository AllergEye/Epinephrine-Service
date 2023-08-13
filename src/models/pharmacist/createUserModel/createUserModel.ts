import Context from '../../../types/context';
import { createUser as createUserConnector } from '../../../connectors/pharmacistConnector';
import { TokenPairResponseFromPharmacist } from '../../../types/pharmacist';
import { transformCreateUserResponse } from '../../../transformers/pharmacist/transformers';
import { createUserErrorHandler } from './createUserErrorHandler';

export const createUserModel = async (
    context: Context,
    email: string,
    firstName: string,
    lastName: string,
    password: string
): Promise<TokenPairResponseFromPharmacist> => {
    try {
        const createUserResponse = await createUserConnector(
            context,
            email,
            firstName,
            lastName,
            password
        );
        const transformed = transformCreateUserResponse(createUserResponse);

        return transformed;
    } catch (error) {
        throw createUserErrorHandler(context, error);
    }
};
