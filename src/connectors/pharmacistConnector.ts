import { credentials } from '@grpc/grpc-js';
import { AuthClient } from '../../proto/pharmacist_api_grpc_pb';
import { PHARMACIST_SERVICE_URL } from '../lib/config';
import Context from '../types/context';
import { promisify } from 'util';
import {
    AuthenticateUserRequest,
    AuthenticateUserResponse,
    CreateUserRequest,
    CreateUserResponse,
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

export const createUser = async (
    context: Context,
    email: string,
    firstName: string,
    lastName: string,
    password: string
): Promise<CreateUserResponse> => {
    const createUserPromise = promisify(client.createUser).bind(client);
    const request = new CreateUserRequest();
    request.setEmail(email);
    request.setFirstname(firstName);
    request.setLastname(lastName);
    request.setPassword(password);

    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    const response: any = await createUserPromise(request);
    return response;
};

export const authenticateUser = async (
    context: Context,
    email: string,
    password: string
): Promise<AuthenticateUserResponse> => {
    const authenticateUserPromise = promisify(client.authenticateUser).bind(
        client
    );
    const request = new AuthenticateUserRequest();
    request.setEmail(email);
    request.setPassword(password);

    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    const response: any = await authenticateUserPromise(request);
    return response;
};
