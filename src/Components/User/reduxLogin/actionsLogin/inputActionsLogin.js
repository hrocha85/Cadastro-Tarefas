import actionTypes from '../actionsTypes.js';

export default {
  setInputEmail: email => ({
    type: actionTypes.SET_INPUT_EMAIL,
    email,
  }),
  setInputName: name => ({
    type: actionTypes.SET_INPUT_NAME,
    name
  }),
  setInputPassword: password => ({
    type: actionTypes.SET_INPUT_PASSWORD,
    password
  }),
  // setInputId: id => ({
  //   type: actionTypes.SET_INPUT_ID,
  //   id,
  // }),
  resetInputs: () => ({
    type: actionTypes.RESET_INPUT,
  })
}