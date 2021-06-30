import React, { useState, Fragment } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import Demo1 from './ResetLogin';
import Mobile from './Mobile';
import Email from './Email';
import Password from './Password';
import Dashboard from './Dashboard';
import { userDetails } from './actions';
import './App.css';
import {connect} from 'react-redux';
import App from './App';


function Demo(props) {
    const [changeMobile, setChangeMobile] = useState(false);
    const [changeEmail, setChangeEmail] = useState(false);
    const [showAlert, setShowAlert] = useState(null);
    const [emailVal, setEmailVal] = useState('');
    const [passwordVal, setPasswordVal] = useState('');

    const showEmail = () => {
        setChangeMobile(!true);
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
            props.userDetails(emailVal);
            //setShowAlert(true);
        } else {
            //this.setState({ showAlert: false });
            setShowAlert(false);
        }
    }

    const goToForgot = () => {
        props.history.push('/ResetLogin');
    }
    //console.log('--props--', props)
    return (
        <Fragment>
            <Card style={{ width: '24rem' }}>
                <Card.Body>
                    <Card.Title className='demo'>Log In</Card.Title><br />
                    <Card.Subtitle className="mb-2 text-muted"><small>Please check that you are visiting the correct URL</small></Card.Subtitle>
                    <Card.Text>
                        <br />
                        <small className="lock1">
                            <img
                                alt="Lock Logo"
                                src="https://tse3.mm.bing.net/th/id/OIP.lKFi4olpYEI9_6lBcWGIowHaHa?w=175&h=180&c=7&o=5&dpr=1.5&pid=1.7"
                                width="20"
                                height="22"
                                className="d-inline-block align-top"
                            />{' '}
                            <b className="lock2">http://</b>Accounts.com/LOGIN</small><br></br><br></br>
                        <Form>
                            <div style={{ marginRight: '200px' }}>
                                <Button variant="light" size="sm" onClick={showEmail}>Email</Button>{' '}

                                <Button variant="light" size="sm" onClick={showMobile}>Mobile</Button><hr></hr>
                            </div>
                            {
                                changeMobile ?
                                    <Mobile />
                                    :
                                    <Email emailVal={emailVal}
                                        emailValueChange={emailValueChange} />
                            }

                            <Password
                                passwordVal={passwordVal}
                                passwordChange={passwordValueChange} />

                            <Button variant="warning" size="lg" onClick={onSubmit} block>Log In</Button>
                            {
                                showAlert === true && (
                                    <Alert variant="success">Success</Alert>
                                )}{(showAlert === false &&
                                    <Alert variant="warning">Failure</Alert>
                                )}
                            <br />

                            <Button variant="link" onClick={goToForgot}>Forgot Password</Button>

                        </Form>

                    </Card.Text>
                </Card.Body>
            </Card>

            <br /><br />
            <small><footer className="foot">&copy; 2020 - 2021 Snehitha.com. All rights reserved</footer></small>

        </Fragment>
    )
}

//export default Demo;
const mapStateToProps = (state) => ({userData: state.userData});

function mapDispatchToProps (dispatch) {
    return {
        userDetails: function (userData) {
            return dispatch(userDetails(userData))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
