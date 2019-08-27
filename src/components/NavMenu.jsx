import React, { Component } from 'react';
import { history } from '../helpers';
import { authenticationService } from '../services';

class NavMenu extends Component {

    constructor(props) {
        super(props);
        this.handleSignout = this.handleSignout.bind(this);
    }

    handleSignout(e) {
        authenticationService.logout();
        history.push('/');
    }

    render() {
        return (

            <nav class="navbar navbar-toggleable-sm navbar-dark bg-blue flex-md-nowrap p-0">
                <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">School Logo</a>
                {authenticationService.currentUserValue &&
                    <ul class="navbar-nav px-3 d-inline">
                        <li class="nav-item d-inline float-left mr-4">
                            <div>
                                <a class="navmenu nav-link" href="javascript:void(0);">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                </a>
                                <div class="navmenu title mr-1">Profile</div>
                            </div>
                        </li>
                        <li class="nav-item d-inline float-left mr-4">
                            <div>
                                <a class="navmenu nav-link" href="javascript:void(0);" onClick={(e) => this.handleSignout(e)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-power"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg>
                                </a>
                                <div class="navmenu title mr-1">Sign&nbsp;out</div>
                            </div>
                        </li>
                    </ul>}
            </nav>

        );
    }
}

export { NavMenu };