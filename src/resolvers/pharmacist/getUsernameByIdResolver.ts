import { getUsernameByIdModel } from '../../models/pharmacist/getUsernameByIdModel';
import Context from '../../types/context';
import {
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
    }
}
