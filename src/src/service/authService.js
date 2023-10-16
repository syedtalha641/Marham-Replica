import axiosInstance from "../api/axiosInstance";
import store from "../store";
import { setToken, setUser } from "../store/userSlice";
import { JWT_LOCAL_STORAGE } from "../utils/contant";

export async function validateToken(token) {
    try {
      const response = await axiosInstance.post('users/validate', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      console.log(response)
      if (response.status == 200) {
        const data = response.data;
        if(data.user && data.token) {
            store.dispatch(setUser(data.user));
            store.dispatch(setToken(data.token));
        }
      } else {
        localStorage.removeItem(JWT_LOCAL_STORAGE);
        store.dispatch(setUser());
        store.dispatch(setToken(''));
      }
    } catch (error) {
      localStorage.removeItem(JWT_LOCAL_STORAGE);
        store.dispatch(setUser());
        store.dispatch(setToken(''));
      console.error('Error validating token:', error);
    }
    return null;
  }