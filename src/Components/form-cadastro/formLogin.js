import React, { Component } from 'react'
import { Button, Form, Label, Input } from 'reactstrap';
import './formLogin.style.scss';

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
                    <div className="form1 row ">
                <form className="form-chid col-5 align-itens-center " onSubmit = {this.onSubmit} 
                autoComplete="off" >
                    <Label for="exampleEmail" className="">Email</Label>
                    <Input type="email" name="email" id="" placeholder="seuemail@aqui.com.br" className="align-itens-center"   value={this.state.email}
                            onChange={this.onChange} />
                    <Label className="">Password</Label>
                    <Input type="Senha" name="password" id="examplePassword" className="align-itens-center" placeholder="Sua senha aqui"
                        value={this.state.password}
                            onChange={this.onChange}/>
                    <Button className="m-2"> Entrar</Button>
                </form>
            
                    </div>
      

            </div>
        )
    }
}

export default FormLogin;
