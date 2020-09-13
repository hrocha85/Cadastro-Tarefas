import React, { Component } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';



export class FormTarefas extends Component {
    render() {
        return (
            <div>
               <Form>
                    <Row form>
                        <Col  lg={4} md={6}>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="text" name="nameJobs" id="tarefaForms" placeholder=" digite aqui qual terefa você quer adicionar" />
                        </FormGroup>
                        </Col>
                        <Col  lg={4} md={6}>
                        <FormGroup>
                            <Label for="examplePassword">Selecione uma data para entrada </Label>
                            <Input type="date" name="nameDateStart" id="tarefaForms" placeholder="Data da Entrega" />
                        </FormGroup>
                        </Col>
                        <Col  lg={4} md={6}>
                        <FormGroup>
                            <Label for="examplePassword">Selecione uma data para conclusão </Label>
                            <Input type="date" name="nameDateFinish" id="tarefaForms" placeholder="Data da Conclusão" />
                        </FormGroup>
                        </Col>
                        <Button>Sign in</Button>
                    </Row>
                 </Form>
            </div>
        )
    }
}

export default FormTarefas;
