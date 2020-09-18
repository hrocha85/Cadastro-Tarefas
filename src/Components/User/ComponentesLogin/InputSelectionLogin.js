import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loginActions from '../reduxLogin/actionsLogin/loginActions';
 import inputActionsLogin from '../reduxLogin/actionsLogin/inputActionsLogin';


import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';


const InputSectionLogin = () => {
  // const id = useSelector(state => state.inputs.id);
  const email = useSelector(state => state.inputs.email);
  const password = useSelector(state => state.inputs.password);
  const name = useSelector(state => state.inputs.name)
  const dispatch = useDispatch();

  const addUser = () => {
    if(email && password && name) {
      dispatch(loginActions.addUser({
        email,name,
        password
        
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

    <div>
    <Form >
        <Row form>
            <Col md={12}>
            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="seuemail@aqui.com.br" required
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
                
                <Button type= "submit" 
                onClick={addUser} >Cadastrar-se</Button>
                                            </Form>

                                    </div>






    // <div className="">
    //   <h1>Cadastre abaixo suas tarefas</h1>
    //   <p>para <span className="text-warning"> Atualizar </span> ou <span className="text-danger">excluir</span>  clique sobre a terefa que deseja alterar</p>
    //   <input
    //     type="text"
    //     placeholder="Nome da Terefa"
    //     value={email}
    //     onChange={e => 
    //       dispatch(inputActionsLogin.setInputemail(e.target.value))
    //     }
    //   />
    //   <label>Data da tarefa </label>
    //   <input
    //     type="date"
    //     placeholder="Data da tarefa"
    //     value={name}
    //     onChange={e => 
    //       dispatch(inputActionsLogin.setInputname(e.target.value))
    //     }
    //   />
    //   <textarea
    //     placeholder="O que deve ser feito?"
    //     type="text"
    //     value={password}
    //     onChange={e => 
    //       dispatch(inputActionsLogin.setInputpassword(e.target.value))
    //     }
    //   ></textarea>
    //   <div
    //     className="InputSection__container__btnWrapper"
    //   >
    //     <button
    //       onClick={id === -1 ? addNote : updateNote}
    //     >
    //       {id === -1 ? "Adicinar Tarefa " : "Atualizar Tarefa"}
    //     </button>      
    //     {id !== -1 &&
    //       <button
    //         onClick={deleteNote}
    //         style={{ marginLeft: '1em', backgroundColor: 'red' }}
    //       >
    //         Excluir
    //       </button>
    //        }
    //    </div>
    // </div>
  );
};

export default InputSectionLogin;
