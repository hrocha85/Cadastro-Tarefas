import actionTypes from '../actionsTypes';

export default {
  addUser: (user)=> ({
    type: actionTypes.ADD_USER,
    user
  }),

}
//   updateNote: (index, note) => ({
//     type: actionTypes.UPDATE_NOTE,
//     index,
//     note,
//   }),
//   deleteNote: (index) => ({
//     type: actionTypes.DELETE_NOTE,
//     index
//   })
// }