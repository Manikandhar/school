import React, { Component } from 'react';
import { Router, Route, BrowserRouter } from 'react-router-dom';
import { Role } from '../helpers';
import { authenticationService } from '../services';
import { PrivateRoute, Layout, unauthorised } from '../components';
import { StudentHome } from '../student';
import { AdminHome } from '../admin';
import { Login } from '../login';

class App extends Component {
    constructor(props) {
        super(props);

        this.history = props.history;
        this.state = {
            currentUser: null,
            isAdmin: false
        };
    }

    componentDidMount() {
        authenticationService.currentUser.subscribe(x => this.setState({
            currentUser: x,
            isAdmin: x && x.role === Role.Admin
        }));
    }

    logout() {
        authenticationService.logout();
        this.history.push('/login');
    }

    render() {
        const { currentUser, isAdmin } = this.state;
        return (
            <Layout>
                {/* <Route exact path={`${process.env.PUBLIC_URL}/`} component={Login} />
                    <Route exact path={`${process.env.PUBLIC_URL}/unauthorised`} component={unauthorised} />
                    <PrivateRoute exact path={`${process.env.PUBLIC_URL}/admin`} roles={[Role.Admin]} component={AdminHome} />
                    <PrivateRoute exact path={`${process.env.PUBLIC_URL}/student`} roles={[Role.Admin, Role.Student]} component={StudentHome} /> */}
                <Route exact path="/" component={Login} />
                <Route exact path="/unauthorised" component={unauthorised} />
                <PrivateRoute exact path="/admin" roles={[Role.Admin]} component={AdminHome} />
                <PrivateRoute exact path="/student" roles={[Role.Admin, Role.Student]} component={StudentHome} />
            </Layout>
        )
    }
}

export { App };