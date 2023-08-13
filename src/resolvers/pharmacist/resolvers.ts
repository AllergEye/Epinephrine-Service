import { getUsernameByIdModel } from '../../models/pharmacist/getUsernameByIdModel/getUsernameByIdModel';
import { createUserModel } from '../../models/pharmacist/createUserModel/createUserModel';
import Context from '../../types/context';
import {
    CreateUserInput,
    TokenPairResponse,
    GetUsernameByIdInput,
    GetUsernameByIdResponse,
} from '../../types/generated';

export const getUsernameByIdResolver = async (
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    parent: any,
    args: { input: GetUsernameByIdInput },
    context: Context,
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    info: any
): Promise<GetUsernameByIdResponse> => {
    const response = await getUsernameByIdModel(context, args.input.userId);
    return {
        username: response,
    };
};

export const createUserResolver = async (
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    parent: any,
    args: { input: CreateUserInput },
    context: Context,
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    info: any
): Promise<TokenPairResponse> => {
    const response = await createUserModel(
        context,
        args.input.email,
        args.input.firstName,
        args.input.lastName,
        args.input.password
    );
    return {
        accessToken: response.accessToken,
        refreshToken: response.refreshToken,
    };
};
