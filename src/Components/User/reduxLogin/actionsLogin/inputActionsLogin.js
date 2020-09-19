import actionTypes from '../actionsTypes.js';

export default {
  setInputEmail: email => ({
    type: actionTypes.SET_INPUT_EMAIL,
    email,
  }),
  setInputName: name => ({
    type: actionTypes.SET_INPUT_NAME,
    name,
  }),
  setInputPassword: password => ({
    type: actionTypes.SET_INPUT_PASSWORD,
    password,
  }),
  setInputDayBorn: dayBorn => ({
    type: actionTypes.SET_INPUT_DATEBORN,
    dayBorn,
  }),
  setInputMonthBorn: monthBorn => ({
    type: actionTypes.SET_INPUT_MONTHBORN,
    monthBorn,
  }),
  setInputYearBorn: yaerBorn => ({
    type: actionTypes.SET_INPUT_YAERBORN,
  yaerBorn,
  }),
  setInputCep: cep => ({
    type: actionTypes.SET_INPUT_CEP,
    cep,
  }),
  setInputCpf: cpf => ({
    type: actionTypes.SET_INPUT_CPF,
    cpf,
  }),
  setInputAdress: adress => ({
    type: actionTypes.SET_INPUT_ADRESS,
    adress,
  }),
  setInputReference: reference => ({
    type: actionTypes.SET_INPUT_REFERENCE,
    reference,
  }),
  setInputCity: city => ({
    type: actionTypes.SET_INPUT_CITY,
    city,
  }),
  setInputCoutry: Coutry => ({
    type: actionTypes.SET_INPUT_COUTRY,
    Coutry,
  }),

  resetInputs: () => ({
    type: actionTypes.RESET_INPUT,
  }),
}

// setInputId: id => ({
  //   type: actionTypes.SET_INPUT_ID,
  //   id,
  // }),