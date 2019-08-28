import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
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

    render() {
        const { currentUser, isAdmin } = this.state;
        return (
            <Layout>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/unauthorised" component={unauthorised} />
                    <PrivateRoute exact path="/admin" roles={[Role.Admin]} component={AdminHome} />
                    <PrivateRoute exact path="/student" roles={[Role.Admin, Role.Student]} component={StudentHome} />
                </Switch>
            </Layout>
        )
    }
}

export { App };