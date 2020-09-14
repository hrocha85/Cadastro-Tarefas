import React, { Component } from 'react'
import CadastroForm from './form'

 class TransactionList extends Component {

    state={
        currentIndex: -1,
        list: this.returnList()
    }

    returnList() {
        if(localStorage.getItem('cadastros') == null)
            localStorage.setItem('cadastros',JSON.stringify([]))
        return JSON.parse(localStorage.getItem('cadastros'))

    }

    onAddOrEdit = (data) => {
        var list = this.returnList()
        list.push(data)
        localStorage.setItem('cadastros',JSON.stringify(list))
        this.setState({ list })
        console.log(list)


    }

    handleEdit = index =>{
        this.setState({
            currentIndex:index

        })
    }

    render() {
        return (
            <div>
                <CadastroForm
                onAddOrEdit = {this.onAddOrEdit}
                currentIndex = {this.state.currentIndex}
                list ={this.state.list}
                 />
                <hr />
                <table>
                    {/* <tbody>
                        {
                            this.state.list.map((item,index)=>{
                                return  <tr key = {index}>
                                    <td>{item.bAccountNo} </td>
                                    <td>{item.bName} </td>
                                    <td>{item.amount} </td>
                                    <td><button onClick={() => this.handleEdit(index)}>Edit</button></td>
                                </tr>
                            })
                        }
                    </tbody> */}
                </table>
            </div>
        )
    }
}

export default TransactionList;
