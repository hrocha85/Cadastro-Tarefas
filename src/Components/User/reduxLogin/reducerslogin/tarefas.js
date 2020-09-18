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
    // case actionTypes.UPDATE_NOTE: {
    //   const { index, note } = action;
    //   const user = [...state.user];
    //   user[index] = note;
    //   return {
    //     user,
    //   }
    // }
    // case actionTypes.DELETE_NOTE: {
    //   const { index } = action;
    //   const user = [];
    //   state.user.forEach((note, i) => {
    //     if(index !== i) {
    //       user.push(note)
    //     }
    //   })      
    //   return {
    //     user,
    //   }
    // }
    default:
      return state;
  }
}