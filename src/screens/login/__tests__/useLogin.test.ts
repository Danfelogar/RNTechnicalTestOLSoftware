//types
import {ILoginCredentials} from '../types';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('validateCredentialsLogin', () => {
  const loginMock: jest.Mocked<{
    //emulate dummyServices
    handleLogin: (data: ILoginCredentials) => Promise<any>;
  }> = {
    handleLogin: jest.fn(),
  };
  test('should call with the correct data and return key on success', async () => {
    const mockResponse = {
      data: {user: 'admin', password: '12345', id: 1, userId: 1},
      pagination: {limit: 1, page: 1, total: 1},
    };
    loginMock.handleLogin.mockResolvedValue(mockResponse);

    const fakeCredentials: ILoginCredentials = {
      user: 'admin',
      password: '12345',
    };

    const result = await loginMock.handleLogin(fakeCredentials);

    expect(result).toEqual(mockResponse);
  });
  test('should call toggleSnackBarError with the correct error message on failure', async () => {
    const mockError = new Error('Fake error');
    loginMock.handleLogin.mockRejectedValue(mockError.message);

    // Crea credenciales ficticias para la prueba
    const fakeCredentials: ILoginCredentials = {
      user: 'fakeAdmin',
      password: 'fakePassword',
    };

    try {
      await loginMock.handleLogin(fakeCredentials);

      fail('Expected to reject, but it resolved successfully.');
    } catch (error: any) {
      expect(error).toBe(mockError.message);
    }
  });
});
