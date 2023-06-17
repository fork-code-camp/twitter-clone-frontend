import jwtDecode from 'jwt-decode';
import { IJWT } from './types';

export const check = async () => {
  const token = await localStorage.getItem('auth-token')

  if(token === null){
    return false
  }

  try{
    const decoded: IJWT | false = await (token ? jwtDecode(token) : false);
    const statusIsAuth =  await (decoded && decoded.exp > Date.now() / 1000);
    return statusIsAuth
  } catch {
      console.log('Invalid JWT token');
      localStorage.removeItem('auth-token')
      return false
  }
}