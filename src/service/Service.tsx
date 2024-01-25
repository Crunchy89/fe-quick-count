import axios, { AxiosError } from 'axios';
import { useSetAtom } from 'jotai';
import { login } from '../store';
import { Login } from '../model/login';

interface Res<T> {
  code: number;
  data: T;
  error_message: string;
}

const baseUrl: string = import.meta.env.VITE_API_URL ?? 'http://localhost:8080';

const Service = () => {
  const setLogin = useSetAtom(login);

  const handleError = (error: AxiosError) => {
    if (error.response) {
      const status = error.response.status;
      const errorData = {
        code: error.response.status,
        error: error.response.data,
      };
      switch (status) {
        case 401:
          setLogin(undefined);
          break;
        default:
          console.log('error: ', errorData);
          break;
      }
    } else if (error.request) {
      console.error('No response received from the server');
    } else {
      console.error('Error setting up the request:', error.message);
    }
  };

  const handleLogin = async (username: string, password: string) => {
    const data = {
      username: username,
      password: password,
    };

    await axios.post<Res<Login>>(`${baseUrl}/auth/login`, data)
    .then((res)=>{
        setLogin(res.data.data);
    })
    .catch(handleError)
  };

  return {
    handleLogin,
  };
};

export default Service;
