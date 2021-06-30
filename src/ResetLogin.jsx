import React,  {useState, Fragment } from 'react';
import {Card, Form, Button, Alert} from 'react-bootstrap';
import Demo from './Login';
import Mobile from './Mobile';
import Email from './Email';
import Password from './Password';

function Demo1(props) {
    const [changeMobile, setChangeMobile] = useState(false);
    const [changeEmail, setChangeEmail] = useState(false);
    const [showAlert, setShowAlert] = useState(null);
    const [emailVal, setEmailVal] = useState('');
    const [passwordVal, setPasswordVal] = useState('');

    const showEmail = () => {
        setChangeEmail(!true);
    }

    const showMobile = () => {
        setChangeMobile(true);
    }

    const emailValueChange = (e) => {
        setEmailVal(e.target.value);
    }

    const passwordValueChange = (e) => {
        setPasswordVal(e.target.value);
    }

    const onSubmit = () => {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        const isEmailValid = emailRegex.test(emailVal);
        const isPasswordValid = passwordRegex.test(passwordVal);
        if (isEmailValid && isPasswordValid) {
            // this.setState({ showAlert: true });
            props.history.push('/Dashboard');
            //setShowAlert(true);
        } else {
            //this.setState({ showAlert: false });
            setShowAlert(false);
        }
    }


    return (
        <Fragment>
        <Card style={{ width: '24rem' }}>
            <Card.Body>
                <Card.Title className='demo'> Reset Login Password</Card.Title><br />
                <Alert variant="warning"><small>For security purposes, no withdrawals are permitted for 24 hours after modification of security methods</small></Alert>
                <Card.Text>
                    <Form>
                        <div style={{ marginRight: '200px' }}>
                            <Button variant="light" size="sm" onClick={showEmail}>Email</Button>{' '}

                            <Button variant="light" size="sm" onClick={showMobile}>Mobile</Button><hr></hr>
                        </div>
                        {
                            changeMobile ?
                                <Mobile />
                                :
                                null
                                // <Email emailVal={emailVal}
                                //        emailValueChange={emailValueChange}/>
                        }
                        <Password 
                           passwordVal={passwordVal}
                           passwordChange={passwordValueChange}/>
                        {/* <Form.Group controlId="formBasicPassword">
                                <Form.Label><small>Enter the account details to reset the password</small></Form.Label> 
                                <Form.Control type="password" placeholder="" size="lg" block/>
                            </Form.Group> */}
                        
                            <Button variant="warning" size="lg"onClick={onSubmit} block >
                                Cancel
                            </Button>
                            {
                                showAlert === true && (
                                    <Alert variant="success">Success</Alert>
                                )}{(showAlert === false &&
                                    <Alert variant="warning">Failure</Alert>
                                )}
                            <br />
                            <br />
                        
                            
                    </Form>
                </Card.Text>
                </Card.Body>
            </Card>
            
            <br /><br />
            <small><footer className="foot">&copy; 2020 - 2021 Snehitha.com. All rights reserved</footer></small>
    
    </Fragment>
    )

}
export default Demo1;