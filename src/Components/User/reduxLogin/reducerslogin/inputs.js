import actionTypes from '../actionsTypes';

const initialState = {
  // id: -1,
  email: '',
  password: '',
  name:'',
  dayBorn:'',
  monthBorn:'',
  yearBorn:'',
  cpf:'',
  cep:'',
  adress:'',
  reference:'',
  city:'',
  coutry:'',

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
    case actionTypes.SET_INPUT_DATEBORN: {
      const { dayBorn } = action;
      return {
        ...state,
        dayBorn,
      }
    }
    case actionTypes.SET_INPUT_MONTHBORN: {
      const { monthBorn } = action;
      return {
        ...state,
        monthBorn,
      }
    }
    case actionTypes.SET_INPUT_YAERBORN: {
      const { yearBorn } = action;
      return {
        ...state,
        yearBorn,
      }
    }
    case actionTypes.SET_INPUT_CPF: {
      const { cpf } = action;
      return {
        ...state,
        cpf,
      }
    }
    case actionTypes.SET_INPUT_CEP: {
      const { cep } = action;
      return {
        ...state,
        cep,
      }
    }
    case actionTypes.SET_INPUT_ADRESS: {
      const { adress } = action;
      return {
        ...state,
        adress,
      }
    }
    case actionTypes.SET_INPUT_REFERENCE: {
      const { reference } = action;
      return {
        ...state,
        reference,
      }
    }
    case actionTypes.SET_INPUT_CITY: {
      const { city } = action;
      return {
        ...state,
        city,
      }
    }
    case actionTypes.SET_INPUT_COUTRY: {
      const { coutry } = action;
      return {
        ...state,
        coutry,
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
    case actionTypes.RESET_INPUT: {
      return initialState;
    }
    default:
      return state;
  }
}