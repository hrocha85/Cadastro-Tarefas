import React, { Component } from 'react'
import CadastroFrom from '/Users/henriquerocha/desenvolvimento/my-app/src/Components/form-cadastro/form';
import './homeStyles.css';

export class Home extends Component {
    render() {
        return (
        
        <div className="home1 container ">
            <div className='row'> 
            <div className="titulo-home col-7 p-2">
            <h1 className='' >Cadastre suas Tarefas</h1>
            <p>Desenvolvido em React por Henrique Rocha</p>
            <p className="p-2">Lorem Ipsum is simplydddd dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>
         <div className=" col-5 p-5">
              <CadastroFrom /> 
         </div>
            </div>
            </div>
            
        )
 
    }
}


  
export default Home;
