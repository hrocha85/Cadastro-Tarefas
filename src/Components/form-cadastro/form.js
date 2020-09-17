import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';


 

class CadastroForm extends Component {

   

    state = {
       
        email:'',
        name:'',
        dateBorn:'',
        cpf:'',
        adress:'',
        reference:'',
        city:'',
        states:'',
        password:''

        
    }

    

     constructor(props){
        super(props);
        

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

       
        
     }
    
    
    onChange(e) {
        this.setState({
            [e.target.name] : e.target.value


        })

    }



   
     

    onSubmit (e) {
        e.preventDefault()
        localStorage.setItem("CADASTRO_EMAIL", this.state.email);   
        localStorage.setItem("CADASTRO_SENHA", this.state.password);   
         window.location.reload();
    }

   
    render(){
        return (
            <div>
                <Form 
                onSubmit = {this.onSubmit} 
                autoComplete="off">
                    <Row form>
                        <Col md={12}>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="seuemail@aqui.com.br"
                             value={this.state.email}
                             onChange={this.onChange}
                             />
                        </FormGroup>
                        </Col>
                        <Col md={12}>
                            <FormGroup>
                                <Label for="exampleNome">Nome</Label>
                                <Input type="text" name="name" id="" placeholder="Nome"
                                value={this.state.name}
                                onChange={this.onChange}
                                />
                            </FormGroup>
                            </Col>
                    
                             <Col md={12}>
                            <FormGroup>
                                <Label for="exampleData">Data de Nascimento</Label>
                                <Input type="date" name="dateBorn" id=""
                                value={this.state.dateBorn}
                                onChange={this.onChange} 
                                />
                            </FormGroup>
                            </Col><Col md={12}>
                            <FormGroup>
                                <Label for="exampleCPF">CPF</Label>
                                <Input  type="text" name="cpf" id="" placeholder="CPF" maxlength="11"
                                value={this.state.cpf}
                                onChange={this.onChange} 
                                />
                            </FormGroup>
                            </Col>
                              <Col md={12}>
                                <FormGroup>
                                    <Label for="exampleCEP">Cep</Label>
                                    <Input type="text" name="cep" maxlength="8" id=""
                                    value={this.state.cep}
                                    onChange={this.onChange}
                                    />
                                </FormGroup>  
                                </Col>
                                <Col md={12}>
                            <FormGroup>
                                <Label for="exampleEndereço">Endereço</Label>
                                <Input type="text" name="adress" id="" placeholder="Meu endereço aqui,
                                 número"
                                 value={this.state.adress}
                             onChange={this.onChange}
                             />
                            </FormGroup>
                            </Col>
                            <Col md={12}>
                            <FormGroup>
                                <Label for="exampleCep">Referência</Label>
                                <Input type="text" name="reference" id="" 
                                placeholder="Apartmento, casa.. "
                                value={this.state.reference}
                                onChange={this.onChange}
                                />
                            </FormGroup>
                            </Col>
                                <Col md={12}>
                                <FormGroup>
                                      <Label for="exampleCidade">Cidade</Label>
                                    <Input type="text" name="city" id="" 
                                    value={this.state.city}
                                    onChange={this.onChange}
                                    />
                                </FormGroup>
                                </Col>
                                <Col md={12}>
                                <FormGroup>
                                    <Label for="exampleEstado">Estado</Label>
                                    <Input type="text" name="state" 
                                    id="exampleEstado" placeholder='"Ex:SP"'
                                    value={this.state.states}
                                    onChange={this.onChange}
                                    />
                                </FormGroup>
                                </Col>   
                                <Col md={12}>
                                <FormGroup>
                                    <Label for="Senha">Senha</Label>
                                    <Input type="password" name="password" id="Senha" placeholder="Crie uma Senha (Max: 8 Caracteres) " maxlength="8"
                                    value={this.state.password}
                                    onChange={this.onChange} 
                                    />
                                </FormGroup>
                                </Col>
                        </Row>
                            <FormGroup check>
                                <Input type="checkbox" name="check" id="exampleCheck"/>
                                <Label for="exampleCheck" check>Concorde aqui com os Termos de uso</Label>
                            </FormGroup>
                            <Button type= "submit" 
                            // onClick={() => { }}
                            >Cadastrar-se</Button>
                     </Form>

            </div>
               
         

        )


    }

        
    
}

export default CadastroForm;

