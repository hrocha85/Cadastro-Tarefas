import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export class FormLogin extends Component {

 

    state = {
       
        email:'',
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

        const emailLocal = localStorage.getItem("CADASTRO_EMAIL");
        const senhaLocal = localStorage.getItem("CADASTRO_SENHA");
        
        if (this.state.email && this.state.senha  ===  emailLocal && senhaLocal){
            
            return window.location.href ='/tarefas'
            //alert("Senha e email incorretos"), 
            

        } else { return alert('Senha Incorreta')}
       
        }
    




    render() {

       



        return (
            <div className="container text-center ">
                <h3>Contole suas tarefas no seu navagador </h3>
                    <p>Crie</p>
                    <p>Atualise e conclua num lugar só</p>
                    <div className="container row ">
                                     <Form className="align-self-center" onSubmit = {this.onSubmit} 
                autoComplete="off" >
                    <Form className= "">
                        <Label for="exampleEmail" className="">Email</Label>
                        <Input type="email" name="email" id="" placeholder="seuemail@aqui.com.br"   value={this.state.email}
                             onChange={this.onChange} />
                    </Form>
                    <Form className=" ">
                        <Label className="">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="Sua senha aqui"
                         value={this.state.password}
                             onChange={this.onChange}/>
                    </Form>
                    <Button> Entrar</Button>
                </Form>
            
                    </div>
      

            </div>
        )
    }
}

export default FormLogin;
