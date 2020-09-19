import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loginActions from '../reduxLogin/actionsLogin/loginActions';
 import inputActionsLogin from '../reduxLogin/actionsLogin/inputActionsLogin';


import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';


const InputSectionLogin = () => {
  // const id = useSelector(state => state.inputs.id);
  const email = useSelector(state => state.inputs.email);
  const password = useSelector(state => state.inputs.password);
  const name = useSelector(state => state.inputs.name);
  const dayBorn = useSelector(state => state.inputs.dayBron);
  const monthBorn = useSelector(state => state.inputs.monthBorn);
  const yearBorn = useSelector(state => state.inputs.yearBorn);
  const cpf = useSelector(state => state.inputs.cpf);
  const cep = useSelector(state => state.inputs.cep);
  const adress = useSelector(state => state.inputs.adress);
  const reference = useSelector(state => state.inputs.reference);
  const city = useSelector(state => state.inputs.city);
  const coutry = useSelector(state => state.inputs.coutry);
  const dispatch = useDispatch();

  const addUser = (e) => {
    if(email && password && name) {
      dispatch(loginActions.addUser({
        email,name,
        password,dayBorn,monthBorn,yearBorn,cpf, cep ,adress,reference,city,coutry 
        
      }))
      dispatch(inputActionsLogin.resetInputs())
    }
  }



  // const updateNote = () => {
  //   if(email && password && name) {
  //     dispatch(loginActions.updateNote(id, {
  //       email, name,
  //       password
  //     }))
  //     dispatch(inputActionsLogin.resetInputs())
  //   }    
  // }

  // const deleteNote = () => {
  //   dispatch(loginActions.deleteNote(id))
  //   dispatch(inputActionsLogin.resetInputs())
  // }

  return (

<div className='container'>
    <Form  >
        <Row  autoComplete="off"  form>
            <Col md={12}>
            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="" placeholder="seuemail@aqui.com.br" required
                 value={email}
                 onChange={e => 
                 dispatch(inputActionsLogin.setInputEmail(e.target.value))}
                 />
            </FormGroup>
            </Col>
            <Col md={12}>
                <FormGroup>
                    <Label for="exampleNome">Nome</Label>
                    <Input type="text" name="name" id="" placeholder="Nome" required
                   value={name}
                   onChange={e => 
                   dispatch(inputActionsLogin.setInputName(e.target.value))}
                    />
                </FormGroup>
                </Col>
                <Col md={4}>
                <Label for="exampleData">Data de Nasciemento</Label>
                <FormGroup>
                    <Label for="exampleData">Dia</Label>
                    <Input type="text" name="dayBorn" id="" 
                      value={dayBorn}
                      onChange={e => 
                      dispatch(inputActionsLogin.setInputDayBorn(e.target.value))}
                    />
                    </FormGroup>
                    </Col>
                    <Col md={4}>
                <FormGroup>
                    <Label for="exampleMonth">Mês</Label>
                    <Input type="text" name="monthBorn" id=""
                      value={monthBorn}
                      onChange={e => 
                      dispatch(inputActionsLogin.setInputMonthBorn(e.target.value))}
                    />
                    </FormGroup>
                    </Col>
                    <Col md={4}>
                <FormGroup>
                    <Label for="example"> Ano</Label>
                    <Input type="text" name="yaerBorn" id="" required
                      value={yearBorn}
                      onChange={e => 
                      dispatch(inputActionsLogin.setInputYearBorn(e.target.value))}
                    />
                    </FormGroup>
                    </Col>
              
                  <Col md={12}>
                  <FormGroup>
                      <Label for="exampleCPF">CPF</Label>
                      <Input  type="text" name="cpf" id="" placeholder="CPF" maxlength="11"
                      value={cpf}
                      onChange={e => 
                      dispatch(inputActionsLogin.setInputCpf(e.target.value))}
                      />
                  </FormGroup>
                  </Col>
                  <Col md={12}>
                  <FormGroup>
                      <Label for="exampleCep">Cep</Label>
                      <Input type="text" name="cep" maxlength="8" id=""
                     value={cep}
                     onChange={e => 
                     dispatch(inputActionsLogin.setInputCep(e.target.value))}
                      />
                  </FormGroup>  
                  </Col>
                    <Col md={12}>
                <FormGroup>
                    <Label for="exampleEndereço">Endereço</Label>
                    <Input type="text" name="adress" id="" placeholder="Meu endereço aqui,
                    número"
                    value={adress}
                    onChange={e => 
                    dispatch(inputActionsLogin.setInputAdress(e.target.value))}
                    />
                    </FormGroup>
                    </Col>
                    <Col md={12}>
                    <FormGroup>
                        <Label for="exampleCep">Referência</Label>
                        <Input type="text" name="reference" id="" 
                        placeholder="Apartmento, casa.. "
                        value={reference}
                        onChange={e => 
                        dispatch(inputActionsLogin.setInputReference(e.target.value))}
                        />
                      </FormGroup>
                      </Col>
                      <Col md={12}>
                          <FormGroup>
                                <Label for="exampleCidade">Cidade</Label>
                              <Input type="text" name="city" id="" 
                              value={city}
                              onChange={e => 
                                dispatch(inputActionsLogin.setInputCity(e.target.value))}
                              />
                          </FormGroup>
                    </Col>
                    <Col md={12}>
                    <FormGroup>
                        <Label for="">Estado</Label>
                        <Input type="text" name="coutry" 
                        id="" placeholder='"Ex:SP"'
                        value={coutry}
                      onChange={e => 
                      dispatch(inputActionsLogin.setInputCoutry(e.target.value))}
                        />
                    </FormGroup>
                    </Col>
                    <Col md={12}>
                      <FormGroup>
                          <Label for="password">Senha</Label>
                          <Input type="password" name="password" id="Senha" placeholder="Crie uma Senha (Max: 8 Caracteres) " maxlength="8" required
                          value={password}
                          onChange={e => 
                          dispatch(inputActionsLogin.setInputPassword(e.target.value))}
                          />
                      </FormGroup>
                      </Col>
          </Row>
                
                <Button 
                 onClick={addUser()} 
                >Cadastrar-se</Button>
          </Form>

</div>

  





  );
};

export default InputSectionLogin;
