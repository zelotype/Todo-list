const REGISTER = 'REGISTER';
const LOGOUT = 'LOGOUT';

export function register(userInfo) {
    return {
      type: REGISTER,
      payload: {
        userInfo,
      },
    };
  }

export function logout() {
  return {
    type: LOGOUT,
    payload: {},
  };
}

const initialState = {
  userInfo: sessionStorage.getItem('userInfo') ? sessionStorage.getItem('userInfo') : null,
};

export default function(state = initialState, action) {
  switch (action.type) {
      case REGISTER:
        return {
            ...state,
            userInfo: action.payload.userInfo,
        };
      case LOGOUT:
        return {
          userInfo: null,
        }
      default:
        return state;
  }
}
            