import actionTypes from '../actionsTypes';

const initialState = {
  // id: -1,
  email: '',
  password: '',
  name:''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_INPUT_EMAIL: {
      const { email } = action;
      return {
        ...state,
        email,
      }
    }
    case actionTypes.SET_INPUT_NAME: {
      const { name } = action;
      return {
        ...state,
        name,
      }
    }
    case actionTypes.SET_INPUT_PASSWORD: {
      const { password } = action;
      return {
        ...state,
        password,
      }
    }
    // case actionTypes.SET_INPUT_ID: {
    //   const { id } = action;
    //   return {
    //     ...state,
    //     id,
    //   }
    // }
    // case actionTypes.RESET_INPUT: {
    //   return initialState;
    // }
    default:
      return state;
  }
}