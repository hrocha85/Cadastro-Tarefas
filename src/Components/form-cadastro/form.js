import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';


 

class CadastroForm extends Component {

    // state = {
       
    //     ...this.returnStateObject()
    // }

    // returnStateObject(){
    //     if(this.props.currentIndex === - 1)
    //     return{
            
    //         email:'',
    //         name:'',
    //         dateBorn:'',
    //         cpf:'',
    //         adress:'',
    //         reference:'',
    //         city:'',
    //         states:'',
    //         password:''

    //     } 

    //     else 
    //         return this.props.list[this.props.currentIndex]
 
    //  }



    


   
    
    // handleInputChange = e => {
    //     this.setState({
    //         [e.target.name] : e.target.value


    //     })

    // }

    

    // handleSubmit (e) {
    //     e.preventDefault()
    //     this.props.onAddOrEdit(this.state)
    // }

   
    render(){
        return (
            <div>
                <Form 
                // onSubmit = {this.handleSubmit} 
                autoComplete="off">
                    <Row form>
                        <Col md={12}>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="seuemail@aqui.com.br"
                            //  value={this.state.email}
                            //  onChange={this.handleInputChange}
                             />
                        </FormGroup>
                        </Col>
                        <Col md={12}>
                            <FormGroup>
                                <Label for="exampleNome">Nome</Label>
                                <Input type="text" name="name" id="exampleAddress" placeholder="Meu endereço aqui, número"
                                // value={this.state.name}
                                // onChange={this.handleInputChange}
                                />
                            </FormGroup>
                            </Col>
                    
                             <Col md={12}>
                            <FormGroup>
                                <Label for="exampleAddress">Data de Nascimento</Label>
                                <Input type="date" name="date" id="exampleAddress"
                                // value={this.state.dateBorn}
                                // onChange={this.handleInputChange} 
                                />
                            </FormGroup>
                            </Col><Col md={12}>
                            <FormGroup>
                                <Label for="exampleCPF">CPF</Label>
                                <Input  type="text" name="cpf" id="exampleAddress" placeholder="CPF" maxlength="11"
                                // value={this.state.cpf}
                                // onChange={this.handleInputChange} 
                                />
                            </FormGroup>
                            </Col>
                              <Col md={12}>
                                <FormGroup>
                                    <Label for="exampleCEP">Cep</Label>
                                    <Input type="text" name="cep" maxlength="8" id="exampleCep"
                                    // value={this.state.cep}
                                    // onChange={this.handleInputChange}
                                    />
                                </FormGroup>  
                                </Col>
                                <Col md={12}>
                            <FormGroup>
                                <Label for="exampleAddress">Endereço</Label>
                                <Input type="text" name="address" id="exampleAddress" placeholder="Meu endereço aqui,
                                 número"
                            //      value={this.state.adress}
                            //  onChange={this.handleInputChange}
                             />
                            </FormGroup>
                            </Col>
                            <Col md={12}>
                            <FormGroup>
                                <Label for="exampleCep">Referência</Label>
                                <Input type="text" name="reference" id="exampleAddress2" 
                                placeholder="Apartmento, casa.. "
                                // value={this.state.reference}
                                // onChange={this.handleInputChange}
                                />
                            </FormGroup>
                            </Col>
                                <Col md={12}>
                                <FormGroup>
                                      <Label for="exampleEstado">Cidade</Label>
                                    <Input type="text" name="city" id="exampleCity" 
                                    // value={this.state.city}
                                    // onChange={this.handleInputChange}
                                    />
                                </FormGroup>
                                </Col>
                                <Col md={12}>
                                <FormGroup>
                                    <Label for="exampleEstado">Estado</Label>
                                    <Input type="text" name="state" 
                                    id="exampleEstado" placeholder='"Ex:SP"'
                                    // value={this.state.states}
                                    // onChange={this.handleInputChange}
                                    />
                                </FormGroup>
                                </Col>   
                                <Col md={12}>
                                <FormGroup>
                                    <Label for="Senha">Senha</Label>
                                    <Input type="password" name="password" id="Senha" placeholder="Crie uma Senha (Max: 8 Caracteres) " maxlength="8"
                                    // value={this.state.password}
                                    // onChange={this.handleInputChange} 
                                    />
                                </FormGroup>
                                </Col>
                        </Row>
                            <FormGroup check>
                                <Input type="checkbox" name="check" id="exampleCheck"/>
                                <Label for="exampleCheck" check>Concorde aqui com os Termos de uso</Label>
                            </FormGroup>
                            <Button type= "submit" 
                            // onClick={() => { console.log(this.state)}}
                            >Cadastrar-se</Button>
                     </Form>

            </div>
               
         

        )


    }

        
    
}

export default CadastroForm;

