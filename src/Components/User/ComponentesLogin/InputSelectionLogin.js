import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loginActions from '../reduxLogin/actionsLogin/loginActions';
 import inputActionsLogin from '../reduxLogin/actionsLogin/inputActionsLogin';


import { Col, Row, Button, Label, Input, Form } from 'reactstrap';


const InputSectionLogin = () => {
  // const id = useSelector(state => state.inputs.id);
  const email = useSelector(state => state.inputs.email);
  const password = useSelector(state => state.inputs.password);
  const name = useSelector(state => state.inputs.name);
  const dayBorn = useSelector(state => state.inputs.dayBorn);
  const monthBorn = useSelector(state => state.inputs.monthBorn);
  const yearBorn = useSelector(state => state.inputs.yearBorn);
  const cpf = useSelector(state => state.inputs.cpf);
  const cep = useSelector(state => state.inputs.cep);
  const adress = useSelector(state => state.inputs.adress);
  const reference = useSelector(state => state.inputs.reference);
  const city = useSelector(state => state.inputs.city);
  const coutry = useSelector(state => state.inputs.coutry);
  const dispatch = useDispatch();

  const addUser = () => {
    if(email && password && name) {
      dispatch(loginActions.addUser({
        email,name,
        password
        
      }))
      dispatch(inputActionsLogin.resetInputs()) && alert("teste")
      
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
        <Row  autoComplete="off" >
            <Col md={12}>
         
                <Label for="email">Email</Label>
                <Input autocomplete="off" type="email" name="email" id="" placeholder="seuemail@aqui.com.br" required
                 value={email}
                 onChange={e => 
                 dispatch(inputActionsLogin.setInputEmail(e.target.value))}
                 />
            
            </Col>
            <Col md={12}>
            
                    <Label for="name">Nome</Label>
                    <Input autocomplete="off" type="text" name="name" id="name" placeholder="Nome" required
                   value={name}
                   onChange={e => 
                   dispatch(inputActionsLogin.setInputName(e.target.value))}
                    />
              
                </Col>
                </Row>
                
                <Label for="example">Data de Nasciemento</Label>
                <Row>
                <Col md={4}>
            
                    <Label for="example">Dia</Label>
                    <Input type="text" name="dayBorn" id="Dia" 
                      value={dayBorn}
                      onChange={e => 
                      dispatch(inputActionsLogin.setInputDayBorn(e.target.value))}
                    />
                   
                    </Col>
                    <Col md={4}>
              
                    <Label for="exampleMonth">Mês</Label>
                    <Input type="text" name="monthBorn" id="mes"
                      value={monthBorn}
                      onChange={e => 
                      dispatch(inputActionsLogin.setInputMonthBorn(e.target.value))}
                    />
                    
                    </Col>
                    <Col md={4}>
    
                    <Label for="example"> Ano</Label>
                    <Input type="text" name="yaerBorn" id="ano" required
                      value={yearBorn}
                      onChange={e => 
                      dispatch(inputActionsLogin.setInputYearBorn(e.target.value))}
                    />
                   
                    </Col>
              
                  <Col md={12}>
                  
                      <Label for="exampleCPF">CPF</Label>
                      <Input  type="text" name="cpf" id="" placeholder="CPF" maxlength="11"
                      value={cpf}
                      onChange={e => 
                      dispatch(inputActionsLogin.setInputCpf(e.target.value))}
                      />
                 
                  </Col>
                  <Col md={12}>
                  
                      <Label for="exampleCep">Cep</Label>
                      <Input type="text" name="cep" maxlength="8" id=""
                     value={cep}
                     onChange={e => 
                     dispatch(inputActionsLogin.setInputCep(e.target.value))}
                      />
                 
                  </Col>
                    <Col md={12}>
              
                    <Label for="exampleEndereço">Endereço</Label>
                    <Input type="text" name="adress" id="" placeholder="Meu endereço aqui,
                    número"
                    value={adress}
                    onChange={e => 
                    dispatch(inputActionsLogin.setInputAdress(e.target.value))}
                    />
                    
                    </Col>
                    <Col md={12}>
                   
                        <Label for="exampleCep">Referência</Label>
                        <Input type="text" name="reference" id="" 
                        placeholder="Apartmento, casa.. "
                        value={reference}
                        onChange={e => 
                        dispatch(inputActionsLogin.setInputReference(e.target.value))}
                        />
                     
                      </Col>
                      <Col md={12}>
                         
                                <Label for="exampleCidade">Cidade</Label>
                              <Input autocomplete="off" type="text" name="city" id="" 
                              value={city}
                              onChange={e => 
                                dispatch(inputActionsLogin.setInputCity(e.target.value))}
                              />
                        
                    </Col>
                    <Col md={12}>
                   
                        <Label  autocomplete="off"  for="">Estado</Label>
                        <Input type="text" name="coutry" 
                        id="" placeholder='"Ex:SP"'
                        value={coutry}
                      onChange={e => 
                      dispatch(inputActionsLogin.setInputCoutry(e.target.value))}
                        />
                    
                    </Col>
                    <Col md={12}>
    
                     
                      <Label for="">Password</Label>
                      <Input autocomplete="off"
                        type="password" name=""  
                        id="" placeholder=""
                        value={password}
                        onChange={e => 
                        dispatch(inputActionsLogin.setInputPassword(e.target.value))}
                        />

                     
             

                      </Col>
          </Row>
                
          <Button  type="submit" onClick={addUser}>Cadastrar-se</Button>
          </Form>
         
</div>

  





  );
};

export default InputSectionLogin;
