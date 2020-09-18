import actionTypes from '../actionsTypes';

const initialState = {
  user: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_USER: {
      const user = [...state.user];
      user.push(action.user);
      return {
        user,
      }
    }

    default:
      return state;
  }
}