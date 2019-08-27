import React, { Component } from 'react';
import { authenticationService } from '../services';
import { history } from '../helpers';
import { config } from '../config';

class Login extends Component {
    constructor(props) {
        super(props);
        this.checkUser();
        this.state = { loaded: true, login: {}, message: null };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    checkUser() {
        authenticationService.isValid()
            .then(resp => {
                if (resp) {
                    config.routes.map((item) => {
                        if (item.role === authenticationService.currentUserValue.role) history.push(item.home);
                    });
                }
            });
    }

    handleChange(e) {
        this.state.login[e.target.name] = e.target.value;
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ loaded: false });

        authenticationService.login(this.state.login.username, this.state.login.password)
            .then(response => {
                this.setState({ loaded: true });
                config.routes.map((item) => {
                    if (item.role === response.role) history.push(item.home);
                });
            }).catch(err => {
                console.log(err);
                this.setState({ loaded: true, message: err.toString() });
                setTimeout(() => {
                    this.setState({ message: null });
                }, 10000);
            });

    }

    render() {
        return (
            <div>
                <form class="form-signin">
                    <div class="form-content">
                        {!this.state.loaded && <div class="ripple-frame">
                            <div class="lds-ripple"><div></div><div></div></div>
                        </div>}
                        <div class="form-tile">
                            <div class="form-label-group">
                                <h4>Sign-in</h4>
                            </div>

                            <div class="form-label-group">
                                <input type="text" id="inputEmail" name="username" class="form-control" placeholder="Email address" required autofocus onChange={this.handleChange} />
                                <label for="inputEmail">Email address</label>
                            </div>

                            <div class="form-label-group">
                                <input type="password" id="inputPassword" name="password" class="form-control" placeholder="Password" required onChange={this.handleChange} />
                                <label for="inputPassword">Password</label>
                            </div>

                            <button class="btn btn-lg btn-primary btn-block" type="button" onClick={this.handleSubmit}>Sign in</button>
                            <div class={this.state.message ? "alert alert-danger mt-4 d-block" : "alert alert-danger mt-4 d-none"}>
                                <span>{this.state.message}</span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

}

export { Login };