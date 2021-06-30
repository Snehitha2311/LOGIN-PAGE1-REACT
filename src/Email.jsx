import React,  {useState, Fragment } from 'react';
import {Form} from 'react-bootstrap';

function Email(props) {
    return (
        <Fragment>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label  style={{ marginRight: '270px', fontSize: '15px' }}>Email</Form.Label>
                    <Form.Control type="email" placeholder="" size="lg"
                    value={props.emailVal}
                    onChange={props.emailValueChange} block/>
                </Form.Group>

            </Fragment>

    )
}
export default Email;