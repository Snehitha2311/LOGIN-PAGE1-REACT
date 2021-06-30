import React,  {useState, Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import Demo from './Login';
import Demo1 from './ResetLogin';
import Dashboard from './Dashboard';
import {connect} from 'react-redux';
import { userDetails} from './actions';

function App(props) {
  console.log('--props--', props)
  return (
    <Fragment>
        <Router>
          <div className="App">
            <Navbar bg="dark" variant="dark" sticky="top">
              <Navbar.Brand href="#home">SNEHITHA</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link>
                  <Link to="/login">Login Page</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/ResetLogin">Forget Password</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/Dashboard">Dashboard</Link>
                </Nav.Link>
              </Nav>
              
              <Navbar.Collapse className="justify-content-end">

                <NavDropdown title="English" variant="dark" id="dropdown-custom-components" style={{ color: 'white', fontSize: '13px' }}>
                  <NavDropdown.Item >Telugu</NavDropdown.Item>
                  <NavDropdown.Item >Hindi</NavDropdown.Item>
                  <NavDropdown.Item >Tamil</NavDropdown.Item>
                  <NavDropdown.Item >English(UK)</NavDropdown.Item>
                </NavDropdown>
              </Navbar.Collapse>
              <Navbar.Text>{props.userData}</Navbar.Text>
              {/* <div>
                <b><i>SNEHITHA</i></b>
              </div> */}
            </Navbar>
            <br /><br />
            {/* <Demo />
            <Demo1 /> */}

            <Switch>
              <Route exact path="/"><Redirect to="/login" /></Route>
              <Route path="/login" component={Demo}></Route>
              <Route path="/ResetLogin" component={Demo1}></Route>
              <Route path="/Dashboard" component={Dashboard}></Route>
              <Route path="**">
                <div>404 not found</div>
              </Route>
            </Switch>
            
          </div>
        </Router>

      </Fragment>
  );
}


const mapStateToProps = (state) => {
  return ({userData: state.userData})
}
export default connect(mapStateToProps)(App);
