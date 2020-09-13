import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


export class formLogin extends Component {
    render() {
        return (
            <div>
                 <Form inline>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="seuemailn@aqui.com.br" />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="examplePassword" className="mr-sm-2">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
                
            </div>
        )
    }
}

export default formLogin;
