import { credentials } from '@grpc/grpc-js';
import { AuthClient } from '../../proto/pharmacist_api_grpc_pb';
import { PHARMACIST_SERVICE_URL } from '../lib/config';
import Context from '../types/context';
import { promisify } from 'util';
import {
    GetUserByIdRequest,
    GetUserByIdResponse,
} from '../../proto/pharmacist_api_pb';

const client = new AuthClient(PHARMACIST_SERVICE_URL, credentials.createSsl());

export const getUserById = async (
    context: Context,
    userId: string
): Promise<GetUserByIdResponse> => {
    const getUserByIdPromise = promisify(client.getUserById).bind(client);
    const request = new GetUserByIdRequest();
    request.setUserid(userId);

    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    const response: any = await getUserByIdPromise(request);
    return response;
};
