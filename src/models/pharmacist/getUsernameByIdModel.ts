import { getUserById as getUserByIdConnector } from '../../connectors/pharmacistConnector';
import Context from '../../types/context';

export const getUsernameByIdModel = async (
    context: Context,
    userId: string
): Promise<string> => {
    const getUserByIdResponse = await getUserByIdConnector(context, userId)
    const res = getUserByIdResponse.getUsername();
    return res;
};
