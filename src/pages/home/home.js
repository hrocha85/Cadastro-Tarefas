import React, { Component } from 'react'
import './homeStyles.css';
import { Provider } from 'react-redux';
import {store, persistor } from '../../Components/User/reduxLogin/createStore';
import InputSectionLogin from "../../Components/User/ComponentesLogin/InputSelectionLogin";
import { PersistGate } from 'redux-persist/integration/react';


export class Home extends Component {


    render() {
        return (
        <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
        <div className="home1 container-fluid ">
            <div className='row'> 
            <div className="titulo-home col-md-6 col-sm-12 p-2">
            <h1 className=' text-light' >Cadastre suas Tarefas</h1>
            <p className=' text-light'>Desenvolvido em React por Henrique Rocha</p>
            <p className="p-2 text-light">Desenvolvedor Web, UX Design e Especialista em Negócios Digitais. Desenvolvedor web e apaixonado por gestão uni o útil ao agradável em busca inovação e empreendedorismo na área de tecnologia, A formação em gestão e em Sistemas para internet me proporcionou vasta experiência em desenvolver estratégias de negócios, vendas, comunicação e conhecimento técnico para atender empresas e clientes. 

Empreendendo e desenvolvendo projetos de todos os níveis, atender clientes e surpreender com ideias para seus negócios é o que me motiva. 


<br /> <a className=' link-site text-white' href="https://www.behance.net/ohenriquerocha">www.behance.net/ohenriquerocha</a>
<br /> <a className=' link-site text-white' href='https://github.com/hrocha85 '>github.com/hrocha85 </a> </p>
            </div>
         <div className=" col-md-5 col-sm-12 p-5">
    
    <InputSectionLogin />
    
         </div>
            </div>
            </div>
            </PersistGate>
    </Provider>
        )
 
    }
}


  
export default Home;
