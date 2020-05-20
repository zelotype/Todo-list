import { createMember } from '../api/backendApi';
import store from '../redux';
import { register as registerAction } from '../redux/register';

export async function register(newUser) {
    const { data } = await createMember(newUser);
    const { userInfo } = data;

    sessionStorage.setItem("userInfo", JSON.stringify(data));
  
    store.dispatch(registerAction(userInfo));
  }
            