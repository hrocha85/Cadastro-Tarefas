import actionTypes from '../actionsTypes.js';

export default {
  setInputTitle: title => ({
    type: actionTypes.SET_INPUT_TITLE,
    title,
  }),
  setInputDay: day => ({
    type: actionTypes.SET_INPUT_DAY,
    day
  }),
  setInputContent: content => ({
    type: actionTypes.SET_INPUT_CONTENT,
    content
  }),
  setInputId: id => ({
    type: actionTypes.SET_INPUT_ID,
    id,
  }),
  resetInputs: () => ({
    type: actionTypes.RESET_INPUT,
  })
}